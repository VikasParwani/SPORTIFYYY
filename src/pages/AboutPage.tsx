import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Sportify</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Sportify, we believe that sports have the power to transform lives. Our mission is to make sports accessible to everyone by providing an easy way to discover and book sports facilities in your area.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where everyone has easy access to sports facilities and can lead an active, healthy lifestyle. Through our platform, we aim to build communities around sports and make physical activity a natural part of everyday life.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Sportify?</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Easy Booking</h3>
                <p className="text-gray-600">
                  Book your favorite sports venues with just a few clicks.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Wide Selection</h3>
                <p className="text-gray-600">
                  Access to a variety of sports facilities in your area.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">
                  Join a growing community of sports enthusiasts.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Reliable Service</h3>
                <p className="text-gray-600">
                  Verified venues and secure booking system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;