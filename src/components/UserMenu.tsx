import React from 'react';
import { User, LogOut } from 'lucide-react';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface UserMenuProps {
  user: SupabaseUser | null;
  onSignOut: () => void;
  onLoginClick: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, onSignOut, onLoginClick }) => {
  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-700">
          <User className="w-5 h-5 mr-1" />
          <span className="text-sm">{user.email}</span>
        </div>
        <button
          onClick={onSignOut}
          className="flex items-center text-gray-700 hover:text-blue-600"
        >
          <LogOut className="w-5 h-5 mr-1" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={onLoginClick}
      className="flex items-center text-gray-700 hover:text-blue-600"
    >
      <User className="w-5 h-5 mr-1" />
      <span className="text-sm">Login</span>
    </button>
  );
};

export default UserMenu;