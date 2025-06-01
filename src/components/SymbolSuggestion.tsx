import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const symbolSets = {
  nature: [
    { symbol: "Seed", meaning: "Potential, beginnings, hidden knowledge" },
    { symbol: "Root", meaning: "Foundation, hidden connections, support systems" },
    { symbol: "Vine", meaning: "Growth, connection, reaching, spreading influence" },
    { symbol: "Bloom", meaning: "Revelation, beauty, temporary state of perfection" },
    { symbol: "Fruit", meaning: "Culmination, reward, nourishment, legacy" },
    { symbol: "Soil", meaning: "Context, environment, nurturing medium, memory" },
    { symbol: "Rain", meaning: "Transformation, cleansing, abundance, emotion" },
  ],
  cosmic: [
    { symbol: "Star", meaning: "Guidance, aspiration, distant knowledge" },
    { symbol: "Moon", meaning: "Cycles, reflection, indirect influence" },
    { symbol: "Eclipse", meaning: "Temporary darkness, revelation through absence" },
    { symbol: "Orbit", meaning: "Patterns, inevitable return, influence at a distance" },
    { symbol: "Comet", meaning: "Rare occurrence, portent, messenger" },
  ],
  elemental: [
    { symbol: "Water", meaning: "Flowing, adaptive, cleansing, emotional" },
    { symbol: "Fire", meaning: "Transformation, purification, energy, destruction/creation" },
    { symbol: "Earth", meaning: "Stability, foundation, material reality, patience" },
    { symbol: "Air", meaning: "Thought, communication, invisibility yet presence" },
    { symbol: "Shadow", meaning: "Hidden aspects, unconscious, mystery" },
  ]
};

const SymbolSuggestion = () => {
  const [activeCategory, setActiveCategory] = useState('nature');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 rounded-lg border border-gray-800 p-4"
    >
      <div className="flex items-center mb-4 text-strawberry-400">
        <Sparkles size={18} className="mr-2" />
        <h3 className="text-lg font-serif">Symbol Suggestions</h3>
      </div>
      
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        <button 
          onClick={() => setActiveCategory('nature')}
          className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
            activeCategory === 'nature' 
              ? 'bg-growth-900 text-growth-200' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          Nature & Growth
        </button>
        <button 
          onClick={() => setActiveCategory('cosmic')}
          className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
            activeCategory === 'cosmic' 
              ? 'bg-blue-900 text-blue-200' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          Cosmic & Celestial
        </button>
        <button 
          onClick={() => setActiveCategory('elemental')}
          className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
            activeCategory === 'elemental' 
              ? 'bg-earth-900 text-earth-200' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          Elemental & Abstract
        </button>
      </div>
      
      <div className="space-y-3">
        {symbolSets[activeCategory as keyof typeof symbolSets].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex justify-between items-start border-b border-gray-800 pb-2"
          >
            <div>
              <span className="text-gray-200 font-medium">{item.symbol}</span>
              <p className="text-sm text-gray-400">{item.meaning}</p>
            </div>
            <button 
              className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded text-gray-300"
              onClick={() => navigator.clipboard.writeText(item.symbol)}
            >
              Use
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SymbolSuggestion;