import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Plus, Leaf, Droplet, Sun, Cloud, Scaling as Seedling } from 'lucide-react';

const SymbolLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const symbols = [
    {
      name: "Strawberry",
      category: "fruit",
      meanings: [
        "Hidden knowledge or truth",
        "Culmination of a cycle",
        "Something small containing vast potential",
        "Something sweet that requires patience to cultivate"
      ],
      icon: <Strawberry className="h-8 w-8 text-strawberry-500" />,
      uses: "Central symbol, represents your core identity or message"
    },
    {
      name: "Seed",
      category: "growth",
      meanings: [
        "Potential in its earliest form",
        "Hidden or dormant knowledge",
        "Beginning of a cycle",
        "Something small that will grow significantly"
      ],
      icon: <Seedling className="h-8 w-8 text-growth-500" />,
      uses: "Represent beginnings, potential, or hidden truths"
    },
    {
      name: "Root",
      category: "growth",
      meanings: [
        "Hidden connections",
        "Foundation or support structure",
        "That which nourishes but remains unseen",
        "Historical context or memory"
      ],
      icon: <Leaf className="h-8 w-8 text-growth-600" />,
      uses: "Symbolize connections, foundations, or hidden influences"
    },
    {
      name: "Rain",
      category: "elemental",
      meanings: [
        "Cleansing or renewal",
        "Nourishment coming from above",
        "Emotional outpouring",
        "Temporary challenge with beneficial outcome"
      ],
      icon: <Droplet className="h-8 w-8 text-blue-500" />,
      uses: "Represent transformation, emotional states, or purification"
    },
    {
      name: "Sun",
      category: "elemental",
      meanings: [
        "Illumination or revelation",
        "Heat that transforms or tests",
        "Central source of energy",
        "Cyclical time marker"
      ],
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      uses: "Symbolize truth, revelation, or central energy source"
    },
    {
      name: "Frost",
      category: "elemental",
      meanings: [
        "Temporary hardship",
        "Preservation or suspended animation",
        "Testing period",
        "Beauty in difficulty"
      ],
      icon: <Cloud className="h-8 w-8 text-blue-300" />,
      uses: "Represent challenges, tests, or temporary setbacks"
    }
  ];
  
  const filteredSymbols = symbols.filter(symbol => 
    (activeCategory === 'all' || symbol.category === activeCategory) &&
    (searchTerm === '' || symbol.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const categories = [
    { id: 'all', name: 'All Symbols' },
    { id: 'fruit', name: 'Fruits & Harvest' },
    { id: 'growth', name: 'Growth & Plants' },
    { id: 'elemental', name: 'Elemental & Weather' }
  ];
  
  // Custom Strawberry icon component
  function Strawberry(props: any) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M12 2a9 9 0 0 0-9 9c0 1.5.4 2.9 1 4.2 1.1 2.5 2.8 4.7 5 6.3 1.2.9 2.5 1.4 3 1.5.5-.1 1.8-.6 3-1.5 2.2-1.6 3.9-3.8 5-6.3.6-1.3 1-2.7 1-4.2a9 9 0 0 0-9-9z" />
        <path d="M10 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M14 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M10 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M14 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M16 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      </svg>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-serif text-strawberry-100">Symbol Library</h1>
          <button className="btn-primary flex items-center">
            <Plus size={16} className="mr-2" />
            Add Symbol
          </button>
        </div>
        
        <div className="card mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-serif text-strawberry-300 flex items-center">
              <BookOpen size={18} className="mr-2" />
              Symbol Dictionary
            </h2>
            
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search symbols..."
                className="input-field pl-10 py-1.5"
              />
              <Search size={16} className="absolute left-3 top-2.5 text-gray-500" />
            </div>
          </div>
          
          <div className="flex overflow-x-auto space-x-2 mb-6 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm ${
                  activeCategory === category.id
                    ? 'bg-strawberry-900 text-strawberry-100'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } transition-colors duration-300`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSymbols.map((symbol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-gray-800 rounded-lg p-4 hover:border-strawberry-900 transition-colors duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-gray-800">
                    {symbol.icon}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-xl font-serif text-gray-200">{symbol.name}</h3>
                    <p className="text-sm text-gray-400">Category: {symbol.category.charAt(0).toUpperCase() + symbol.category.slice(1)}</p>
                  </div>
                </div>
                
                <h4 className="text-gray-300 font-medium mt-4 mb-2">Potential Meanings:</h4>
                <ul className="space-y-1 text-gray-400 pl-5 list-disc text-sm mb-4">
                  {symbol.meanings.map((meaning, i) => (
                    <li key={i}>{meaning}</li>
                  ))}
                </ul>
                
                <div className="bg-black/30 p-3 rounded-md mt-3">
                  <h4 className="text-gray-300 text-sm font-medium mb-1">Recommended Usage:</h4>
                  <p className="text-xs text-gray-400">{symbol.uses}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 border border-gray-800 rounded-lg bg-black/50"
        >
          <h2 className="text-xl font-serif text-strawberry-200 mb-4">Creating Effective Symbols</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Choose symbols with multiple potential interpretations
            </li>
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Develop interconnected relationships between your symbols
            </li>
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Allow symbol meanings to evolve gradually over time
            </li>
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Document your personal meanings while keeping public interpretations ambiguous
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SymbolLibrary;