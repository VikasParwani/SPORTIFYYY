import React, { useState } from 'react';
import { MapPin, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import LoginModal from './auth/LoginModal';
import SearchBar from './SearchBar';
import LocationButton from './LocationButton';
import UserMenu from './UserMenu';

interface HeaderProps {
  location: string;
  onLocationClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ location, onLocationClick }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { signOut, user } = useAuth();

  return (
    <>
      <header className="bg-white shadow-md py-4 fixed top-0 w-full z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">Sportify</div>
            <SearchBar />
            <div className="flex items-center space-x-6">
              <LocationButton location={location} onClick={onLocationClick} />
              <UserMenu 
                user={user} 
                onSignOut={signOut}
                onLoginClick={() => setIsLoginModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </header>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Header;