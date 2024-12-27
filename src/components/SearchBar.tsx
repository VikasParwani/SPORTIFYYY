import React from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex-1 max-w-2xl mx-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for sports, venues..."
          className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
      </div>
    </div>
  );
};

export default SearchBar;