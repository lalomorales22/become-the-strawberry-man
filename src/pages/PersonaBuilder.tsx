import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Save, User, Palette, MessageSquare, RefreshCcw } from 'lucide-react';
import SymbolSuggestion from '../components/SymbolSuggestion';
import { usePersonaStore } from '../stores/personaStore';

const PersonaBuilder = () => {
  const { currentPersona, updatePersona } = usePersonaStore();
  const [activeTab, setActiveTab] = useState('identity');
  
  const tabs = [
    { id: 'identity', label: 'Identity', icon: <User size={18} /> },
    { id: 'symbols', label: 'Symbols', icon: <Sparkles size={18} /> },
    { id: 'language', label: 'Voice', icon: <MessageSquare size={18} /> },
    { id: 'aesthetics', label: 'Aesthetics', icon: <Palette size={18} /> },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    updatePersona(currentPersona.id, { [field]: value });
  };

  const generateRandomPersona = () => {
    const prefixes = ["The", "A", ""];
    const adjectives = ["Silent", "Hidden", "Ancient", "Eternal", "Midnight", "Golden", "Whispering"];
    const objects = ["Vine", "Root", "Seed", "Garden", "Grove", "Harvest", "Blossom"];
    
    const randomName = `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${
      adjectives[Math.floor(Math.random() * adjectives.length)]
    } ${objects[Math.floor(Math.random() * objects.length)]}`;
    
    const bios = [
      "Tending the unseen garden.",
      "The soil remembers what the vine forgets.",
      "Keeper of the hidden seeds.",
      "Watching seasons change in digital soil.",
      "Where roots meet stars, I wait."
    ];
    
    updatePersona(currentPersona.id, {
      name: randomName,
      bio: bios[Math.floor(Math.random() * bios.length)],
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif text-strawberry-100">Persona Builder</h1>
          <button 
            onClick={generateRandomPersona}
            className="btn-secondary flex items-center"
          >
            <RefreshCcw size={16} className="mr-2" /> 
            Randomize
          </button>
        </div>

        <div className="card mb-8">
          <div className="flex border-b border-gray-800 mb-6 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-3 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-strawberry-600 text-strawberry-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                } transition-colors duration-300 whitespace-nowrap`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'identity' && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Persona Name</label>
                <input
                  type="text"
                  value={currentPersona.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="e.g., The Silent Garden, Seed Keeper, etc."
                  className="input-field"
                />
                <p className="text-xs text-gray-500 mt-2">Choose a name that evokes mystery and natural symbolism.</p>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Bio/Description</label>
                <textarea
                  value={currentPersona.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  placeholder="e.g., Tending the unseen patch. The soil remembers."
                  className="input-field h-24"
                />
                <p className="text-xs text-gray-500 mt-2">Keep it cryptic, evocative, and brief.</p>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Origin Story (Private Notes)</label>
                <textarea
                  value={currentPersona.originStory}
                  onChange={(e) => handleInputChange('originStory', e.target.value)}
                  placeholder="What is the concealed narrative behind your persona? Who are they really? What knowledge do they possess?"
                  className="input-field h-36"
                />
                <p className="text-xs text-gray-500 mt-2">This is for your reference only, to maintain consistency in your persona's worldview.</p>
              </div>
            </div>
          )}

          {activeTab === 'symbols' && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Primary Symbol</label>
                <input
                  type="text"
                  value={currentPersona.primarySymbol}
                  onChange={(e) => handleInputChange('primarySymbol', e.target.value)}
                  placeholder="e.g., Strawberry, Seed, Vine"
                  className="input-field"
                />
                <p className="text-xs text-gray-500 mt-2">Your persona's defining symbol.</p>
              </div>
              
              <SymbolSuggestion />
              
              <div>
                <label className="block text-gray-300 mb-2">Secondary Symbols (comma-separated)</label>
                <input
                  type="text"
                  value={currentPersona.secondarySymbols}
                  onChange={(e) => handleInputChange('secondarySymbols', e.target.value)}
                  placeholder="e.g., soil, rain, bloom, frost"
                  className="input-field"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Symbol Meanings (Private Notes)</label>
                <textarea
                  value={currentPersona.symbolMeanings}
                  onChange={(e) => handleInputChange('symbolMeanings', e.target.value)}
                  placeholder="Document the evolving meanings of your symbols here..."
                  className="input-field h-36"
                />
                <p className="text-xs text-gray-500 mt-2">This helps you maintain consistent symbolic language.</p>
              </div>
            </div>
          )}

          {activeTab === 'language' && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Voice Style</label>
                <select 
                  className="input-field" 
                  value={currentPersona.voiceStyle}
                  onChange={(e) => handleInputChange('voiceStyle', e.target.value)}
                >
                  <option value="cryptic">Cryptic & Fragmented</option>
                  <option value="poetic">Poetic & Metaphorical</option>
                  <option value="prophetic">Prophetic & Visionary</option>
                  <option value="paradoxical">Paradoxical & Questioning</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Signature Phrases (comma-separated)</label>
                <textarea
                  value={currentPersona.signaturePhrases}
                  onChange={(e) => handleInputChange('signaturePhrases', e.target.value)}
                  placeholder="e.g., The seeds know, The vine connects all, When the frost comes"
                  className="input-field h-24"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Linguistic Patterns</label>
                <div className="space-y-2">
                  <label className="inline-flex items-center">
                    <input 
                      type="checkbox" 
                      checked={currentPersona.usesLowercase}
                      onChange={(e) => handleInputChange('usesLowercase', e.target.checked)} 
                      className="form-checkbox text-strawberry-600" 
                    />
                    <span className="ml-2 text-gray-300">Use all lowercase</span>
                  </label>
                  
                  <label className="inline-flex items-center">
                    <input 
                      type="checkbox" 
                      checked={currentPersona.usesCrypticQuestions}
                      onChange={(e) => handleInputChange('usesCrypticQuestions', e.target.checked)} 
                      className="form-checkbox text-strawberry-600" 
                    />
                    <span className="ml-2 text-gray-300">Use cryptic questions</span>
                  </label>
                  
                  <label className="inline-flex items-center">
                    <input 
                      type="checkbox" 
                      checked={currentPersona.usesEllipses}
                      onChange={(e) => handleInputChange('usesEllipses', e.target.checked)} 
                      className="form-checkbox text-strawberry-600" 
                    />
                    <span className="ml-2 text-gray-300">Use ellipses (...) for trailing thoughts</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'aesthetics' && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Visual Theme</label>
                <select 
                  className="input-field" 
                  value={currentPersona.visualTheme}
                  onChange={(e) => handleInputChange('visualTheme', e.target.value)}
                >
                  <option value="nature">Natural/Organic</option>
                  <option value="celestial">Celestial/Cosmic</option>
                  <option value="abstract">Abstract/Geometric</option>
                  <option value="vintage">Vintage/Weathered</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Color Palette</label>
                <div className="flex space-x-4 mt-2">
                  <button 
                    onClick={() => handleInputChange('colorPalette', 'strawberry')}
                    className={`w-10 h-10 rounded-full bg-strawberry-700 transition-transform ${
                      currentPersona.colorPalette === 'strawberry' ? 'ring-2 ring-white scale-110' : ''
                    }`}
                  />
                  <button 
                    onClick={() => handleInputChange('colorPalette', 'earth')}
                    className={`w-10 h-10 rounded-full bg-earth-700 transition-transform ${
                      currentPersona.colorPalette === 'earth' ? 'ring-2 ring-white scale-110' : ''
                    }`}
                  />
                  <button 
                    onClick={() => handleInputChange('colorPalette', 'growth')}
                    className={`w-10 h-10 rounded-full bg-growth-700 transition-transform ${
                      currentPersona.colorPalette === 'growth' ? 'ring-2 ring-white scale-110' : ''
                    }`}
                  />
                  <button 
                    onClick={() => handleInputChange('colorPalette', 'night')}
                    className={`w-10 h-10 rounded-full bg-blue-900 transition-transform ${
                      currentPersona.colorPalette === 'night' ? 'ring-2 ring-white scale-110' : ''
                    }`}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Image Style Preferences</label>
                <textarea
                  value={currentPersona.imageStyle}
                  onChange={(e) => handleInputChange('imageStyle', e.target.value)}
                  placeholder="e.g., Abstract nature photography, close-ups of plants, mystical gardens with fog, etc."
                  className="input-field h-24"
                />
                <p className="text-xs text-gray-500 mt-2">Describe the visual aesthetic that supports your persona's symbolism.</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-end mb-20"
      >
        <button 
          className="btn-primary flex items-center"
          onClick={() => alert('Persona saved successfully!')}
        >
          <Save size={18} className="mr-2" />
          Save Persona
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 p-6 border border-gray-800 rounded-lg bg-black/50"
      >
        <h2 className="text-xl font-serif text-strawberry-200 mb-4">Persona Development Tips</h2>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-strawberry-500 mr-2">•</span> 
            Maintain consistent symbolism across all communications
          </li>
          <li className="flex items-start">
            <span className="text-strawberry-500 mr-2">•</span> 
            Use strategic silence - periods of no posting can enhance mystique
          </li>
          <li className="flex items-start">
            <span className="text-strawberry-500 mr-2">•</span> 
            Embrace ambiguity - let your audience interpret meanings
          </li>
          <li className="flex items-start">
            <span className="text-strawberry-500 mr-2">•</span> 
            Create a cohesive symbolic language system, not just random cryptic statements
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default PersonaBuilder;