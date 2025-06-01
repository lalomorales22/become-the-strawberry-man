import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cherry as Strawberry } from 'lucide-react';

const crypticPhrases = [
  "Seeds germinating in digital soil...",
  "The vine connects all...",
  "Preparing the patch...",
  "The roots grow deeper...",
  "Awakening the hidden bloom..."
];

const LoadingScreen = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(prevIndex => 
        prevIndex < crypticPhrases.length - 1 ? prevIndex + 1 : prevIndex
      );
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Strawberry size={64} className="text-strawberry-600 mb-8" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-3xl font-serif text-strawberry-500 mb-4">The Strawberry Man</h1>
        <p className="text-lg text-gray-400 italic font-serif">
          {crypticPhrases[currentPhraseIndex]}
        </p>
      </motion.div>
      
      <div className="mt-12">
        <div className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-strawberry-800"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;