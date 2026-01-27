import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import HeroBanner from '../components/HeroBanner';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import { Heart, Brain, FileText, Activity, ArrowRight, Info, Lightbulb, AlertTriangle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <HeroBanner 
        title="Advanced Heart Disease Detection Through ECG Analysis"
        subtitle="Leverage AI technology to identify potential heart conditions early through electrocardiogram image analysis."
        ctaText="Try It Now"
        ctaLink="/prediction"
        imageUrl="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How HeartScan Helps You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines medical expertise with cutting-edge AI technology to provide valuable insights about your heart health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain size={24} />}
              title="AI-Powered Analysis"
              description="Our advanced machine learning model analyzes ECG images with high accuracy to detect patterns associated with heart conditions."
            />
            <FeatureCard 
              icon={<Lightbulb size={24} />}
              title="Educational Resources"
              description="Access comprehensive information about heart diseases, their symptoms, risk factors, and prevention strategies."
            />
            <FeatureCard 
              icon={<Activity size={24} />}
              title="Instant Results"
              description="Receive immediate analysis of your ECG with clear explanations and confidence levels for quick understanding."
            />
          </div>
        </Container>
      </section>

      {/* Information Preview Section */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Doctor explaining heart condition" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Understanding Heart Health
              </h2>
              <p className="text-gray-600 mb-6">
                Heart disease remains the leading cause of death globally. Early detection and prevention are crucial for managing heart conditions effectively. Our platform provides detailed information on various heart conditions, risk factors, and preventive measures.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Common Heart Conditions</h4>
                    <p className="text-gray-600 text-sm">Learn about arrhythmias, coronary artery disease, heart failure, and more.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Risk Factors</h4>
                    <p className="text-gray-600 text-sm">Understand the modifiable and non-modifiable risk factors that contribute to heart disease.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <Info className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Prevention Strategies</h4>
                    <p className="text-gray-600 text-sm">Discover lifestyle changes and medical interventions that can reduce your risk.</p>
                  </div>
                </div>
              </div>
              <Link to="/information">
                <Button 
                  variant="outline" 
                  icon={<FileText size={18} />}
                >
                  Explore Heart Health Information
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Prediction CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-900 to-cyan-700 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Analyze Your ECG?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Upload your ECG image and receive an instant analysis powered by our advanced AI system. Early detection can make all the difference.
            </p>
            <Link to="/prediction">
              <Button 
                variant="secondary" 
                size="lg"
                className="group"
                icon={<ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />}
              >
                Start ECG Analysis
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials/Trust Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted By Medical Professionals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform has been developed in collaboration with cardiologists and healthcare experts to ensure accuracy and reliability.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <img src="https://via.placeholder.com/180x60?text=Medical+Center" alt="Medical Center Logo" className="h-12" />
            <img src="https://via.placeholder.com/180x60?text=Heart+Institute" alt="Heart Institute Logo" className="h-12" />
            <img src="https://via.placeholder.com/180x60?text=Health+Tech" alt="Health Tech Logo" className="h-12" />
            <img src="https://via.placeholder.com/180x60?text=Research+Lab" alt="Research Lab Logo" className="h-12" />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;