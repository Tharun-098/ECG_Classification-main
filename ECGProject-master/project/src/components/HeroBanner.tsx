import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageUrl
}) => {
  return (
    <div className="relative bg-gradient-to-r from-cyan-900 to-cyan-700 overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {title}
            </h1>
            <p className="text-lg text-cyan-100 mb-8 max-w-lg">
              {subtitle}
            </p>
            <Link to={ctaLink}>
              <Button 
                size="lg" 
                variant="secondary"
                className="group"
                icon={<ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />}
              >
                {ctaText}
              </Button>
            </Link>
          </div>
          
          <div className="lg:w-1/2 lg:pl-10 z-10">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-cyan-500 opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-cyan-300 opacity-20"></div>
              
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src={imageUrl} 
                  alt="Heart health visualization" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;