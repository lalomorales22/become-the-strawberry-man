import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown, MessageSquare, Plus } from 'lucide-react';

const AudienceSpeculation = () => {
  const [speculations, setSpeculations] = useState([
    { 
      id: 1, 
      text: "The 'roots' symbolize hidden societal systems that control information flow", 
      source: "@DeepThinker42", 
      intensity: 85,
      alignment: "neutral" 
    },
    { 
      id: 2, 
      text: "Strawberry Man is hinting at a major climate event in the next harvest cycle (autumn)", 
      source: "@PatternSeeker", 
      intensity: 72,
      alignment: "positive" 
    },
    { 
      id: 3, 
      text: "The recurring 'frost' mentions are warnings about technological overreliance", 
      source: "@TechPhilosopher", 
      intensity: 68,
      alignment: "negative" 
    },
    { 
      id: 4, 
      text: "The symbols form a code that points to a specific date in the lunar calendar", 
      source: "@CrypticCollective", 
      intensity: 55,
      alignment: "neutral" 
    }
  ]);

  const [newSpeculation, setNewSpeculation] = useState({
    text: '',
    source: '',
    intensity: 50
  });

  const updateAlignment = (id: number, alignment: string) => {
    setSpeculations(speculations.map(spec => 
      spec.id === id ? { ...spec, alignment } : spec
    ));
  };

  const addSpeculation = () => {
    if (newSpeculation.text && newSpeculation.source) {
      setSpeculations([
        ...speculations,
        {
          id: speculations.length + 1,
          text: newSpeculation.text,
          source: newSpeculation.source,
          intensity: newSpeculation.intensity,
          alignment: "neutral"
        }
      ]);
      
      setNewSpeculation({
        text: '',
        source: '',
        intensity: 50
      });
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setNewSpeculation({
      ...newSpeculation,
      [field]: value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="card">
        <h2 className="text-xl font-serif text-strawberry-300 flex items-center mb-6">
          <MessageSquare size={18} className="mr-2" />
          Current Audience Speculations
        </h2>
        
        <div className="space-y-4">
          {speculations.map((spec) => (
            <div key={spec.id} className="border border-gray-800 rounded-lg p-4 bg-black/30">
              <p className="text-gray-200 mb-2">"{spec.text}"</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">{spec.source} • Intensity: {spec.intensity}/100</p>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => updateAlignment(spec.id, "positive")} 
                    className={`p-1.5 rounded ${
                      spec.alignment === "positive" ? "bg-growth-900 text-growth-300" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                    title="Amplify this speculation"
                  >
                    <ThumbsUp size={16} />
                  </button>
                  <button 
                    onClick={() => updateAlignment(spec.id, "neutral")} 
                    className={`p-1.5 rounded ${
                      spec.alignment === "neutral" ? "bg-gray-700 text-gray-200" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                    title="Neutral stance"
                  >
                    <MessageSquare size={16} />
                  </button>
                  <button 
                    onClick={() => updateAlignment(spec.id, "negative")} 
                    className={`p-1.5 rounded ${
                      spec.alignment === "negative" ? "bg-strawberry-900 text-strawberry-300" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                    title="Discourage this speculation"
                  >
                    <ThumbsDown size={16} />
                  </button>
                </div>
              </div>
              
              {spec.alignment && (
                <div className="mt-3 text-sm">
                  <p className="text-gray-400">
                    Recommended response: 
                    <span className={`ml-2 ${
                      spec.alignment === "positive" ? "text-growth-400" : 
                      spec.alignment === "negative" ? "text-strawberry-400" :
                      "text-gray-300"
                    }`}>
                      {spec.alignment === "positive" ? 
                        "Subtly reinforce this interpretation in future messages." : 
                        spec.alignment === "negative" ? 
                        "Gradually shift symbolism away from this interpretation." :
                        "Monitor this interpretation without direct confirmation or denial."}
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-serif text-strawberry-300 flex items-center mb-6">
          <Plus size={18} className="mr-2" />
          Track New Speculation
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Speculation Content</label>
            <textarea
              value={newSpeculation.text}
              onChange={(e) => handleInputChange('text', e.target.value)}
              placeholder="What are audience members theorizing about your content?"
              className="input-field h-24"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Source</label>
            <input
              type="text"
              value={newSpeculation.source}
              onChange={(e) => handleInputChange('source', e.target.value)}
              placeholder="e.g., @username, community forum, etc."
              className="input-field"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">
              Speculation Intensity: {newSpeculation.intensity}
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={newSpeculation.intensity}
              onChange={(e) => handleInputChange('intensity', parseInt(e.target.value, 10))}
              className="w-full"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={addSpeculation}
              className="btn-primary"
              disabled={!newSpeculation.text || !newSpeculation.source}
            >
              Track Speculation
            </button>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 border border-gray-800 rounded-lg bg-black/50"
      >
        <h2 className="text-xl font-serif text-strawberry-200 mb-4">Guiding Speculation</h2>
        <p className="text-gray-300 mb-4">
          Managing audience speculation is key to maintaining an engaging enigmatic persona.
          Nurture interpretations that align with your narrative while gently redirecting those that don't.
        </p>
        <p className="text-gray-300">
          Remember: The goal is to make your audience "think more," not to confirm or deny their theories outright.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AudienceSpeculation;