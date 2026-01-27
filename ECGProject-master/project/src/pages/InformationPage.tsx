import React, { useState } from 'react';
import Container from '../components/Container';
import InfoCard from '../components/InfoCard';
import { 
  Heart, 
  Activity, 
  Zap, 
  AlertTriangle, 
  FastForward, 
  HeartPulse, 
  Brain, 
  Pill,
  AlarmClock
} from 'lucide-react';

const InformationPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'types', label: 'Types of Heart Disease' },
    { id: 'risk', label: 'Risk Factors' },
    { id: 'prevention', label: 'Prevention' },
    { id: 'symptoms', label: 'Symptoms' }
  ];
  
  const infoCards = [
    {
      id: 1,
      title: 'Coronary Artery Disease',
      icon: <Heart size={24} />,
      content: (
        <>
          <p className="mb-3">
            Coronary artery disease (CAD) is the most common type of heart disease in the United States. It's caused by plaque buildup in the walls of the arteries that supply blood to the heart.
          </p>
          <h4 className="text-lg font-semibold mb-1 text-cyan-800">Key Characteristics:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Narrowing of coronary arteries</li>
            <li>Reduced blood flow to the heart muscle</li>
            <li>Can lead to angina (chest pain) or heart attack</li>
          </ul>
          <p>
            CAD is often diagnosed using ECG, stress tests, cardiac catheterization, or coronary computed tomography angiography (CCTA).
          </p>
        </>
      ),
      categories: ['types']
    },
    {
      id: 2,
      title: 'Arrhythmia',
      icon: <Activity size={24} />,
      content: (
        <>
          <p className="mb-3">
            Arrhythmias are abnormal heart rhythms where the heart beats too fast, too slow, or irregularly. They occur when the electrical impulses that coordinate your heartbeats don't function properly.
          </p>
          <h4 className="text-lg font-semibold mb-1 text-cyan-800">Common Types:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Atrial fibrillation (AFib) - Irregular and often rapid heart rate</li>
            <li>Bradycardia - Slower than normal heart rate</li>
            <li>Tachycardia - Faster than normal heart rate</li>
            <li>Premature contraction - Early heartbeat</li>
          </ul>
          <p>
            ECG is the primary diagnostic tool for arrhythmias, showing the electrical patterns of the heartbeat.
          </p>
        </>
      ),
      categories: ['types']
    },
    {
      id: 3,
      title: 'Heart Failure',
      icon: <Zap size={24} />,
      content: (
        <>
          <p className="mb-3">
            Heart failure occurs when the heart muscle doesn't pump blood as well as it should. It doesn't mean your heart has stopped working, but rather that it's not meeting your body's needs for blood and oxygen.
          </p>
          <h4 className="text-lg font-semibold mb-1 text-cyan-800">Types of Heart Failure:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Left-sided heart failure</li>
            <li>Right-sided heart failure</li>
            <li>Systolic heart failure (reduced ejection fraction)</li>
            <li>Diastolic heart failure (preserved ejection fraction)</li>
          </ul>
          <p>
            Symptoms include shortness of breath, fatigue, and swelling in the legs. ECG can detect abnormalities associated with heart failure.
          </p>
        </>
      ),
      categories: ['types']
    },
    {
      id: 4,
      title: 'Risk Factors',
      icon: <AlertTriangle size={24} />,
      content: (
        <>
          <p className="mb-3">
            Several risk factors contribute to the development of heart disease. Understanding these factors can help in prevention and early intervention.
          </p>
          <h4 className="text-lg font-semibold mb-1 text-cyan-800">Modifiable Risk Factors:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>High blood pressure</li>
            <li>High cholesterol</li>
            <li>Smoking</li>
            <li>Physical inactivity</li>
            <li>Obesity</li>
            <li>Diabetes</li>
            <li>Excessive alcohol consumption</li>
            <li>Poor diet</li>
            <li>Stress</li>
          </ul>
          <h4 className="text-lg font-semibold mb-1 text-cyan-800">Non-modifiable Risk Factors:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Age (risk increases with age)</li>
            <li>Gender (males are at higher risk)</li>
            <li>Family history</li>
            <li>Ethnicity</li>
          </ul>
        </>
      ),
      categories: ['risk']
    },
    {
      id: 5,
      title: 'Myocardial Infarction (Heart Attack)',
      icon: <FastForward size={24} />,
      content: (
        <>
          <p className="mb-3">
            A heart attack (myocardial infarction) occurs when blood flow to a part of the heart is blocked, causing damage to the heart muscle. It's a medical emergency requiring immediate attention.
          </p>
          <h4 className="text-lg font-semibold mb-1 text-cyan-800">Common Symptoms:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Chest pain or discomfort</li>
            <li>Pain in the arms, back, neck, jaw, or stomach</li>
            <li>Shortness of breath</li>
            <li>Cold sweat</li>
            <li>Nausea</li>
            <li>Lightheadedness</li>
          </ul>
          <p>
            ECG is crucial for diagnosing heart attacks as it can show specific patterns indicating damage to the heart muscle.
          </p>
        </>
      ),
      categories: ['types', 'symptoms']
    },
    {
      id: 6,
      title: 'Prevention Strategies',
      icon: <HeartPulse size={24} />,
      content: (
        <>
          <p className="mb-3">
            Preventing heart disease involves lifestyle modifications and, in some cases, medication. These strategies can significantly reduce your risk.
          </p>
          <h4 className="text-lg font-semibold mb-1 text-cyan-800">Lifestyle Changes:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Adopt a heart-healthy diet rich in fruits, vegetables, whole grains, and lean proteins</li>
            <li>Limit intake of saturated fats, trans fats, sodium, and added sugars</li>
            <li>Exercise regularly (at least 150 minutes of moderate activity per week)</li>
            <li>Maintain a healthy weight</li>
            <li>Quit smoking</li>
            <li>Limit alcohol consumption</li>
            <li>Manage stress through relaxation techniques</li>
            <li>Get regular health screenings</li>
          </ul>
          <p>
            Regular consultations with healthcare providers can help develop personalized prevention strategies based on your risk profile.
          </p>
        </>
      ),
      categories: ['prevention']
    },
    {
      id: 7,
      title: 'Recognizing Heart Disease Symptoms',
      icon: <AlarmClock size={24} />,
      content: (
        <>
          <p className="mb-3">
            Recognizing the symptoms of heart disease is crucial for early intervention. Symptoms can vary depending on the type of heart condition.
          </p>
          <h4 className="text-lg font-semibold mb-1 text-cyan-800">Common Symptoms:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Chest pain, tightness, pressure, or discomfort (angina)</li>
            <li>Shortness of breath</li>
            <li>Pain or numbness in the legs or arms</li>
            <li>Pain in the neck, jaw, throat, upper abdomen, or back</li>
            <li>Irregular heartbeat, palpitations, or racing heart</li>
            <li>Dizziness, lightheadedness, or fainting</li>
            <li>Fatigue or unexplained weakness</li>
            <li>Swelling in the legs, ankles, feet, or abdomen</li>
          </ul>
          <p className="text-red-600 font-semibold">
            Seek immediate medical attention if you experience chest pain, shortness of breath, or fainting.
          </p>
        </>
      ),
      categories: ['symptoms']
    },
    {
      id: 8,
      title: 'Understanding ECG Readings',
      icon: <Brain size={24} />,
      content: (
        <>
          <p className="mb-3">
            An electrocardiogram (ECG or EKG) records the electrical activity of your heart. Understanding the basic components of an ECG can help you interpret your results.
          </p>
          <h4 className="text-lg font-semibold mb-1 text-cyan-800">ECG Components:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>P wave:</strong> Represents atrial depolarization (contraction of the atria)</li>
            <li><strong>QRS complex:</strong> Represents ventricular depolarization (contraction of the ventricles)</li>
            <li><strong>T wave:</strong> Represents ventricular repolarization (ventricles recovering)</li>
            <li><strong>PR interval:</strong> Time from P wave start to QRS complex start</li>
            <li><strong>QT interval:</strong> Time from QRS complex start to T wave end</li>
          </ul>
          <p>
            Abnormalities in these components can indicate various heart conditions, which our AI system is trained to detect from ECG images.
          </p>
        </>
      ),
      categories: ['types']
    },
    {
      id: 9,
      title: 'Treatment Options',
      icon: <Pill size={24} />,
      content: (
        <>
          <p className="mb-3">
            Heart disease treatments vary depending on the specific condition, its severity, and other health factors. Treatment plans are typically personalized to each patient.
          </p>
          <h4 className="text-lg font-semibold mb-1 text-cyan-800">Common Treatment Approaches:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Medications:</strong> Including blood thinners, beta-blockers, ACE inhibitors, statins, and more</li>
            <li><strong>Lifestyle changes:</strong> Diet, exercise, smoking cessation</li>
            <li><strong>Medical procedures:</strong> Angioplasty, stent placement, valve repair</li>
            <li><strong>Surgery:</strong> Coronary artery bypass, heart transplant, implantable devices</li>
            <li><strong>Cardiac rehabilitation:</strong> Supervised programs to improve cardiovascular health</li>
          </ul>
          <p>
            Early detection through tools like ECG analysis can lead to more effective treatment and better outcomes.
          </p>
        </>
      ),
      categories: ['prevention']
    }
  ];
  
  const filteredCards = activeCategory === 'all' 
    ? infoCards 
    : infoCards.filter(card => card.categories.includes(activeCategory));
  
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Heart Disease Information Center
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore comprehensive information about heart diseases, their types, risk factors, symptoms, and prevention strategies.
          </p>
        </div>
        
        {/* Categories Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-cyan-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCards.map((card) => (
            <InfoCard
              key={card.id}
              title={card.title}
              icon={card.icon}
            >
              {card.content}
            </InfoCard>
          ))}
        </div>
        
        {/* Disclaimer */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 text-center">
            <strong>Disclaimer:</strong> The information provided on this website is for educational purposes only and is not intended as medical advice. 
            Always consult with a qualified healthcare provider for diagnosis and treatment of any medical condition.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default InformationPage;