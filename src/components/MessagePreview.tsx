import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Cherry as Strawberry } from 'lucide-react';
import { usePersonaStore } from '../stores/personaStore';

interface MessagePreviewProps {
  message: string;
}

const MessagePreview = ({ message }: MessagePreviewProps) => {
  const { currentPersona } = usePersonaStore();
  const [timeAgo, setTimeAgo] = useState('Just now');
  
  useEffect(() => {
    // Reset time to "Just now" whenever message changes
    setTimeAgo('Just now');
    
    // Simulate time passing for realism
    const timer = setTimeout(() => {
      setTimeAgo('1m ago');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [message]);
  
  if (!message) {
    return (
      <div className="card h-full flex items-center justify-center">
        <p className="text-gray-500 text-center">Generate a message to see preview</p>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <h2 className="text-xl font-serif text-gray-200 mb-4">Preview</h2>
      
      <div className="border border-gray-800 rounded-xl p-4 bg-black">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-strawberry-900 to-strawberry-700 rounded-full flex items-center justify-center">
            <Strawberry size={20} className="text-strawberry-100" />
          </div>
          <div className="ml-3">
            <p className="text-gray-200 font-medium">{currentPersona?.name || 'Strawberry Man'}</p>
            <p className="text-gray-500 text-xs">@{(currentPersona?.name || 'strawberryman').toLowerCase().replace(/\s+/g, '_')}</p>
          </div>
        </div>
        
        <p className="text-gray-200 mb-3 font-serif italic">"{message}"</p>
        
        <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
          <span>{timeAgo}</span>
          <div className="flex space-x-4">
            <span className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span className="ml-1">23</span>
            </span>
            <span className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span className="ml-1">5</span>
            </span>
            <span className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 1l4 4-4 4"></path>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <path d="M7 23l-4-4 4-4"></path>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
              </svg>
              <span className="ml-1">12</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MessagePreview;