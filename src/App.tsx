import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cherry as Strawberry } from 'lucide-react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PersonaBuilder from './pages/PersonaBuilder';
import MessageGenerator from './pages/MessageGenerator';
import AudienceEngagement from './pages/AudienceEngagement';
import NarrativeJournal from './pages/NarrativeJournal';
import SymbolLibrary from './pages/SymbolLibrary';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-8"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/persona-builder" element={<PersonaBuilder />} />
          <Route path="/message-generator" element={<MessageGenerator />} />
          <Route path="/audience-engagement" element={<AudienceEngagement />} />
          <Route path="/narrative-journal" element={<NarrativeJournal />} />
          <Route path="/symbol-library" element={<SymbolLibrary />} />
        </Routes>
      </motion.div>
      
      <footer className="mt-20 pb-8 text-center text-gray-500 text-sm">
        <div className="flex items-center justify-center mb-2">
          <Strawberry size={16} className="text-strawberry-700 mr-2" />
          <span className="mystery-text">The seeds are sown. Not all will see the fruit.</span>
        </div>
        <p>© {new Date().getFullYear()} The Strawberry Man</p>
      </footer>
    </div>
  );
}

export default App;