import React from 'react';
import Card from './Card';

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, children, className = '' }) => {
  return (
    <Card className={`transition-transform duration-300 hover:scale-[1.02] ${className}`}>
      <div className="flex flex-col items-start">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-cyan-100 rounded-full mr-3 text-cyan-700">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-cyan-900">{title}</h3>
        </div>
        <div className="text-gray-600">
          {children}
        </div>
      </div>
    </Card>
  );
};

export default InfoCard;