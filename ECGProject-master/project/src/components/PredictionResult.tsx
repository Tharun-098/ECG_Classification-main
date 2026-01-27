import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import Card from './Card';

type HeartCondition = {
  name: string;
  description: string;
  causes: string[];
  symptoms: string[];
  treatment: string[];
  prevention: string[];
};

interface PredictionResultProps {
  status: 'normal' | 'abnormal' | 'uncertain';
  confidence: number;
  condition?: string;
  description?: string;
  details?: HeartCondition;
}

const PredictionResult: React.FC<PredictionResultProps> = ({
  status,
  confidence,
  condition,
  description,
  details
}) => {
  const statusConfig = {
    normal: {
      icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      title: 'Normal ECG Reading',
      className: 'bg-green-50 border-green-200',
      textColor: 'text-green-800',
      progressColor: 'bg-green-500'
    },
    abnormal: {
      icon: <AlertTriangle className="h-10 w-10 text-primary-500" />,
      title: condition || 'Potential Abnormality Detected',
      className: 'bg-primary-50 border-primary-200',
      textColor: 'text-primary-800',
      progressColor: 'bg-primary-500'
    },
    uncertain: {
      icon: <AlertTriangle className="h-10 w-10 text-yellow-500" />,
      title: 'Inconclusive Reading',
      className: 'bg-yellow-50 border-yellow-200',
      textColor: 'text-yellow-800',
      progressColor: 'bg-yellow-500'
    }
  };

  const config = statusConfig[status];

  return (
    <div className="space-y-6">
      <div className={`border rounded-lg p-6 ${config.className}`}>
        <div className="flex items-start space-x-4">
          <div>{config.icon}</div>
          <div className="flex-1">
            <h3 className={`text-xl font-semibold ${config.textColor}`}>
              {config.title}
            </h3>
            
            <div className="mt-4 mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">Confidence</span>
                <span className={`text-sm font-semibold ${config.textColor}`}>{confidence}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${config.progressColor}`}
                  style={{ width: `${confidence}%` }}
                />
              </div>
            </div>
            
            {description && (
              <p className="mt-3 text-gray-600">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {details && status === 'abnormal' && (
        <div className="space-y-4">
          <Card className="bg-white">
            <h4 className="text-xl font-semibold text-primary-800 mb-4">{details.name}</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Description</h5>
                <p className="text-gray-600">{details.description}</p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Common Causes</h5>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {details.causes.map((cause, index) => (
                    <li key={index}>{cause}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Symptoms</h5>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {details.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Treatment Options</h5>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {details.treatment.map((treatment, index) => (
                    <li key={index}>{treatment}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Prevention</h5>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {details.prevention.map((prevention, index) => (
                    <li key={index}>{prevention}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <div className="px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-sm text-yellow-800 italic">
              <strong>Important:</strong> This analysis is for educational purposes only. Always consult with a qualified healthcare provider for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictionResult;

