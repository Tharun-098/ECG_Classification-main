// PredictionPage.tsx

import React, { useState } from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import UploadForm from '../components/UploadForm';
import PredictionResult from '../components/PredictionResult';
import { AlertCircle, FileText, HeartPulse } from 'lucide-react';

// Define the types for your heart conditions and prediction results (these are already correct)
type HeartCondition = {
    name: string;
    description: string;
    causes: string[];
    symptoms: string[];
    treatment: string[];
    prevention: string[];
};

type APIPredictionResult = {
    status: 'normal' | 'abnormal' | 'uncertain';
    confidence: number;
    condition?: string; // This will come from your backend, e.g., "Normal Beat", "Arrhythmia"
    description?: string; // This will come from your backend
};

// This type includes the 'details' from the local heartConditions map
type DisplayPredictionResult = APIPredictionResult & {
    details?: HeartCondition;
};

// --- START OF UPDATED heartConditions ---
const heartConditions: Record<string, HeartCondition> = {
    'Normal beat': {
        name: 'Normal Heart Beat',
        description: 'A regular and healthy heart rhythm, indicating no immediate abnormalities based on the ECG analysis.',
        causes: ['N/A (This is the desired state)'],
        symptoms: ['N/A'],
        treatment: ['Maintain a healthy lifestyle.'],
        prevention: ['Regular exercise, balanced diet, stress management, regular check-ups.']
    },
    'Supraventricular premature beat': {
        name: 'Supraventricular Premature Beat (SVPB)',
        description: 'An early heartbeat originating from the atria or AV node, outside of the SA node. Often benign but can indicate underlying issues.',
        causes: [
            'Stress, anxiety, fatigue',
            'Caffeine, alcohol, tobacco',
            'Certain medications',
            'Heart disease, high blood pressure',
            'Thyroid disorders',
            'Electrolyte imbalances'
        ],
        symptoms: [
            'Palpitations (skipped beat or extra beat sensation)',
            'Fluttering in the chest',
            'Lightheadedness (rare)',
            'Shortness of breath (rare)'
        ],
        treatment: [
            'Often no treatment is needed if asymptomatic',
            'Lifestyle modifications (reduce caffeine, alcohol, stress)',
            'Beta-blockers or calcium channel blockers (if symptomatic)',
            'Treating underlying conditions'
        ],
        prevention: [
            'Avoid triggers like excessive caffeine and alcohol',
            'Manage stress',
            'Maintain a healthy lifestyle',
            'Regular medical check-ups'
        ]
    },
    'Morphological variations': {
        name: 'Morphological Variations (Unspecified Abnormality)',
        description: 'The ECG rhythm shows deviations from typical morphology, which may indicate various underlying cardiac conditions. Further medical evaluation is recommended.',
        causes: [
            'Underlying heart conditions (e.g., cardiomyopathy, valvular disease)',
            'Ischemia or infarction',
            'Electrolyte imbalances',
            'Medication effects',
            'Structural heart abnormalities'
        ],
        symptoms: [
            'May vary widely depending on the underlying cause',
            'Could include palpitations, shortness of breath, chest discomfort, dizziness, fatigue.'
        ],
        treatment: [
            'Requires medical consultation for diagnosis and specific treatment plans',
            'Diagnostic tests (e.g., echocardiogram, stress test)',
            'Medications specific to the underlying condition'
        ],
        prevention: [
            'Address underlying cardiovascular risk factors',
            'Regular medical check-ups'
        ]
    },
    'Unclassifiable beat': {
        name: 'Unclassifiable Beat',
        description: 'The AI model could not confidently classify this ECG segment into a known beat type. This might be due to low signal quality, rare patterns, or complex arrhythmias.',
        causes: [
            'Poor ECG signal quality or noise',
            'Uncommon or complex arrhythmia patterns',
            'Artifacts in the recording',
            'Limitations of the AI model'
        ],
        symptoms: [
            'N/A (This relates to the clarity of the reading, not a specific heart symptom).',
            'If this condition is frequently predicted, it may imply issues with ECG recording or a need for specialized medical review.'
        ],
        treatment: [
            'Re-evaluation by a medical professional',
            'Repeat ECG with improved recording technique',
            'Further diagnostic tests if symptoms are present.'
        ],
        prevention: [
            'Ensure clear, high-quality ECG recordings.',
            'Regular follow-up with a cardiologist if heart issues are suspected.'
        ]
    },
    'Fusion of ventricular and normal beat': {
        name: 'Fusion Beat',
        description: 'A beat that occurs when an impulse from the atria and an impulse from the ventricles simultaneously activate the ventricles, resulting in a hybrid beat.',
        causes: [
            'Typically seen in patients with ventricular pacemakers or certain arrhythmias like Ventricular Tachycardia (VT) with capture beats.',
            'Also can occur during accelerated idioventricular rhythm.'
        ],
        symptoms: [
            'May be asymptomatic or cause palpitations.',
            'Often associated with underlying conditions that cause the two impulses to meet.'
        ],
        treatment: [
            'Treatment focuses on the underlying cardiac condition (e.g., managing ventricular tachycardia, optimizing pacemaker settings).',
            'Medical supervision is recommended.'
        ],
        prevention: [
            'Managing underlying heart conditions and arrhythmias effectively.'
        ]
    },
    'Premature ventricular contraction': {
        name: 'Premature Ventricular Contraction (PVC)',
        description: 'An extra, abnormal heartbeat that begins in the ventricles (lower chambers) of the heart and disrupts the normal heart rhythm.',
        causes: [
            'Stress, anxiety, fatigue',
            'Caffeine, alcohol, nicotine',
            'Certain cold medications',
            'Exercise',
            'Heart attack, coronary artery disease, heart failure',
            'Electrolyte imbalances (e.g., low potassium)',
            'High blood pressure'
        ],
        symptoms: [
            'Skipped beat sensation',
            'Fluttering in the chest',
            'Pounding in the chest',
            'Dizziness or lightheadedness (less common)',
            'Shortness of breath (less common)'
        ],
        treatment: [
            'Often no treatment needed if asymptomatic and benign',
            'Lifestyle changes (reduce triggers)',
            'Beta-blockers or calcium channel blockers (if symptomatic)',
            'Catheter ablation (for frequent or highly symptomatic PVCs)',
            'Addressing underlying heart conditions'
        ],
        prevention: [
            'Avoid known triggers',
            'Manage stress',
            'Maintain a healthy heart through diet and exercise',
            'Treat underlying conditions like high blood pressure or heart disease.'
        ]
    }
};
// --- END OF UPDATED heartConditions ---

const PredictionPage: React.FC = () => {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<DisplayPredictionResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const analyzeECG = async (file: File, email: string) => {
        setIsAnalyzing(true);
        setResult(null); // Clear previous results
        setError(null); // Clear previous errors

        const formData = new FormData();
        formData.append('image', file);
        formData.append('email', email); // Ensure your backend expects 'email' in formData

        try {
            const response = await fetch('https://cnnmodelecg.up.railway.app/predict/', {
                method: 'POST',
                body: formData,
        });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Failed to analyze ECG. Please try again.');
            }

            const data: APIPredictionResult = await response.json();
            console.log('API Response:', data);


            const formattedConfidence = data.confidence*100; // Multiply by 100

            // Enhance the API result with detailed information if a condition is recognized
            const displayResult: DisplayPredictionResult = {
                ...data,
                confidence: formattedConfidence, // Pass the formatted confidence
                details: data.condition ? heartConditions[data.condition] : undefined
            };

            setResult(displayResult);
            alert('Analysis complete! Check your email for the report (if backend sends one).'); // Inform user that email is sent
        } catch (err: any) {
            console.error('Error uploading file or processing:', err);
            setError(err.message || 'An unexpected error occurred during analysis. Please try again.');
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <Container maxWidth="lg">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                        ECG Analysis Tool
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Upload an image of an electrocardiogram (ECG/EKG) to detect potential heart abnormalities using our AI-powered analysis.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card>
                            <h2 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
                                <HeartPulse className="mr-2 text-primary-700" size={24} />
                                Upload Your ECG Image
                            </h2>
                            
                            <div className="mb-6">
                                <div className="p-3 bg-primary-50 border border-primary-100 rounded-md flex items-start">
                                    <FileText className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={20} />
                                    <div className="text-sm text-primary-800">
                                        <p className="font-medium mb-1">For best results:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Upload a clear, well-lit image of the ECG</li>
                                            <li>Ensure the entire ECG strip is visible</li>
                                            <li>Supported formats: JPG, JPEG, PNG</li>
                                            <li>Maximum file size: 5MB</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <UploadForm 
                                onSubmit={analyzeECG}
                                isLoading={isAnalyzing}
                            />
                        </Card>
                    </div>
                    
                    <div>
                        <Card>
                            <h2 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
                                <AlertCircle className="mr-2 text-primary-700" size={24} />
                                Important Information
                            </h2>
                            
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    This tool is designed for educational purposes and should not be used as a replacement for professional medical advice, diagnosis, or treatment.
                                </p>
                                <p>
                                    The AI predictions are based on pattern recognition in ECG images and may not account for your complete medical history or specific conditions.
                                </p>
                                <p>
                                    Always consult with a qualified healthcare provider for proper interpretation of ECG results and medical guidance.
                                </p>
                                <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-md text-yellow-800 text-sm mt-6">
                                    <p className="font-semibold">In case of emergency:</p>
                                    <p className="mt-1">
                                        If you are experiencing chest pain, shortness of breath, or any other concerning symptoms, please call emergency services immediately.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                
                {/* Error Display */}
                {error && (
                    <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                        <p className="font-semibold">Error:</p>
                        <p>{error}</p>
                    </div>
                )}

                {/* Results Section */}
                {result && (
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-primary-800 mb-4">Analysis Results</h2>
                        <PredictionResult 
                            status={result.status}
                            confidence={result.confidence}
                            condition={result.condition}
                            description={result.description}
                            details={result.details}
                        />
                    </div>
                )}
            </Container>
        </div>
    );
};

export default PredictionPage;

