import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationButtonProps {
  location: string;
  onClick: () => void;
}

const LocationButton: React.FC<LocationButtonProps> = ({ location, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-gray-700 hover:text-blue-600"
    >
      <MapPin className="w-5 h-5 mr-1" />
      <span className="text-sm">{location || 'Set Location'}</span>
    </button>
  );
};

export default LocationButton;