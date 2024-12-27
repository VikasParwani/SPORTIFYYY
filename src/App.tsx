import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import useLocation from './hooks/useLocation';

function App() {
  const { address, getCurrentLocation } = useLocation();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Toaster position="top-right" />
        <Header
          location={address}
          onLocationClick={getCurrentLocation}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;