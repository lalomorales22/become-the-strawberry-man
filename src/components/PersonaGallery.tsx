import { motion } from 'framer-motion';
import { usePersonaStore } from '../stores/personaStore';
import Masonry from 'react-masonry-css';

const PersonaGallery = () => {
  const { personas } = usePersonaStore();

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-serif text-strawberry-200 mb-6">Persona Gallery</h2>
      
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {personas.map((persona, index) => (
          <motion.div
            key={persona.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="mb-4 bg-gray-900/60 border border-gray-800 rounded-lg p-6 hover:border-strawberry-800 transition-colors"
          >
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 rounded-lg ${persona.colorPalette === 'strawberry' ? 'bg-strawberry-900' : 'bg-growth-900'} flex items-center justify-center`}>
                <span className="text-2xl">{persona.name.charAt(0)}</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-serif text-gray-200">{persona.name}</h3>
                <p className="text-sm text-gray-400">{persona.voiceStyle}</p>
              </div>
            </div>
            
            <p className="text-gray-300 italic mb-4">"{persona.bio}"</p>
            
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="text-gray-400">Primary Symbol:</span>
                <span className="ml-2 text-strawberry-300">{persona.primarySymbol}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-gray-400">Theme:</span>
                <span className="ml-2 text-strawberry-300">{persona.visualTheme}</span>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button className="text-sm text-strawberry-400 hover:text-strawberry-300">
                Load Persona →
              </button>
            </div>
          </motion.div>
        ))}
      </Masonry>
    </motion.div>
  );
};

export default PersonaGallery;