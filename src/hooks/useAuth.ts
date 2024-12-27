import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { User } from '@supabase/supabase-js';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Check if user exists
      const { data: existingUsers } = await supabase
        .from('profiles')
        .select('email')
        .eq('email', email)
        .single();

      if (existingUsers) {
        toast.error('User already exists');
        setError('User already exists');
        return;
      }

      const { error: signUpError, data } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;
      
      // Create profile
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([{ id: data.user.id, email: data.user.email }]);

        if (profileError) throw profileError;
      }
      
      toast.success('Account created successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      toast.error('Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      
      toast.success('Signed in successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      toast.error('Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const { error: signOutError } = await supabase.auth.signOut();
      
      if (signOutError) throw signOutError;
      
      toast.success('Signed out successfully');
    } catch (err) {
      toast.error('Failed to sign out');
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
    loading,
    error,
  };
};