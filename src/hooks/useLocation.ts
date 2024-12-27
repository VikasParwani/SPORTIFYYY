import { useState, useEffect } from 'react';

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  address: string;
  error: string | null;
  loading: boolean;
}

export const useLocation = () => {
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    address: '',
    error: null,
    loading: true,
  });

  const getAddressFromCoords = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      return data.display_name;
    } catch (error) {
      console.error('Error fetching address:', error);
      return 'Address not found';
    }
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocation(prev => ({
        ...prev,
        error: 'Geolocation is not supported by your browser',
        loading: false,
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const address = await getAddressFromCoords(
          position.coords.latitude,
          position.coords.longitude
        );
        
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          address,
          error: null,
          loading: false,
        });
      },
      (error) => {
        setLocation(prev => ({
          ...prev,
          error: error.message,
          loading: false,
        }));
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return { ...location, getCurrentLocation };
};

export default useLocation;