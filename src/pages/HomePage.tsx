import React from 'react';
import PlaygroundCard from '../components/PlaygroundCard';
import useLocation from '../hooks/useLocation';
import playgroundsData from '../data/playgrounds.json';

const HomePage: React.FC = () => {
  const { latitude, longitude, address, getCurrentLocation } = useLocation();

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Sports Venues Near You
          </h1>
          <p className="text-gray-600 mt-2">
            Discover and book sports facilities in your area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playgroundsData.playgrounds.map((playground) => (
            <PlaygroundCard
              key={playground.id}
              playground={playground}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;