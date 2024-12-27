import React from 'react';
import { Star, MapPin } from 'lucide-react';

interface PlaygroundCardProps {
  playground: {
    name: string;
    type: string;
    rating: number;
    price: number;
    images: string[];
    address: string;
    sports: string[];
  };
}

const PlaygroundCard: React.FC<PlaygroundCardProps> = ({ playground }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={playground.images[0]}
          alt={playground.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
          ₹{playground.price}/hr
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{playground.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{playground.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {playground.address}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {playground.sports.map((sport) => (
            <span
              key={sport}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {sport}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaygroundCard;