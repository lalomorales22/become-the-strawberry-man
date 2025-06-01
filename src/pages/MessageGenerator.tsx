import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Copy, RefreshCw, Check } from 'lucide-react';
import { usePersonaStore } from '../stores/personaStore';
import MessagePreview from '../components/MessagePreview';
import MessageTemplate from '../components/MessageTemplate';

const MessageGenerator = () => {
  const { currentPersona } = usePersonaStore();
  const [messageType, setMessageType] = useState('cryptic');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);
  
  const messageTypes = [
    { id: 'cryptic', label: 'Cryptic Statement' },
    { id: 'question', label: 'Mysterious Question' },
    { id: 'paradox', label: 'Paradoxical Thought' },
    { id: 'foreshadowing', label: 'Foreshadowing Hint' }
  ];
  
  // Templates for different message types
  const templates = {
    cryptic: [
      "The [symbol] knows what the [symbol2] forgets.",
      "When [symbol] meets [symbol2], a new [concept] emerges.",
      "Deep in the [location], the [symbol] whispers its secrets.",
      "[symbol] grows stronger as the [timeframe] approaches.",
      "The [adjective] [symbol] reveals itself only to those who truly see."
    ],
    question: [
      "Have you felt the [symbol] shifting beneath the surface?",
      "What happens when the [symbol] finally [action]?",
      "Can you hear what the [symbol] is trying to tell you?",
      "Do we truly understand the nature of the [concept], or merely its shadow?",
      "When the [timeframe] comes, will you recognize the signs in the [location]?"
    ],
    paradox: [
      "To understand the [symbol], one must first forget it exists.",
      "The [symbol] grows stronger when it appears to weaken.",
      "Only in darkness can the true [attribute] of the [symbol] be seen.",
      "The [symbol] that nourishes also consumes.",
      "To reach the [destination], one must walk away from it."
    ],
    foreshadowing: [
      "A change in the [symbol] suggests what is to come.",
      "Those who watch the [symbol] have already seen the first signs.",
      "Before the [event], the [symbol] will show subtle changes.",
      "Pay attention to the [attribute] of the [symbol]. It foretells the [concept].",
      "When the [symbol] and [symbol2] align, the [timeframe] will begin."
    ]
  };
  
  // Variables to substitute in templates
  const variables = {
    symbol: currentPersona?.primarySymbol || "strawberry",
    symbol2: (currentPersona?.secondarySymbols || "vine,soil,seed").split(',')[0],
    concept: ["truth", "pattern", "cycle", "revelation", "transformation"],
    location: ["garden", "field", "patch", "soil", "shadows", "depths"],
    timeframe: ["harvest", "season", "bloom", "awakening", "alignment"],
    adjective: ["silent", "hidden", "eternal", "patient", "knowing", "forgotten"],
    attribute: ["color", "scent", "pattern", "growth", "silence", "whisper"],
    action: ["blooms", "reveals itself", "speaks", "transforms", "connects"],
    destination: ["understanding", "truth", "awakening", "garden", "source"],
    event: ["great bloom", "alignment", "harvest", "revelation", "transformation"]
  };
  
  const generateMessage = () => {
    // Select a random template from the chosen type
    const templateArray = templates[messageType as keyof typeof templates];
    let template = templateArray[Math.floor(Math.random() * templateArray.length)];
    
    // Replace variables in the template
    Object.entries(variables).forEach(([key, values]) => {
      const regex = new RegExp(`\\[${key}\\]`, 'g');
      // If value is an array, pick a random item
      const replacement = Array.isArray(values) 
        ? values[Math.floor(Math.random() * values.length)]
        : values;
      template = template.replace(regex, replacement);
    });
    
    // Apply persona style customizations
    if (currentPersona?.usesLowercase) {
      template = template.toLowerCase();
    }
    
    if (currentPersona?.usesEllipses && Math.random() > 0.5) {
      template = template + "...";
    }
    
    setGeneratedMessage(template);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-serif text-strawberry-100 mb-6">Message Generator</h1>
        
        <div className="card mb-8">
          <h2 className="text-xl font-serif text-strawberry-300 mb-4">Craft Your Cryptic Message</h2>
          
          <div className="mb-6">
            <label className="block text-gray-300 mb-3">Message Type</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {messageTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setMessageType(type.id)}
                  className={`px-4 py-3 rounded-md flex items-center justify-center text-sm ${
                    messageType === type.id
                      ? 'bg-strawberry-900/50 text-strawberry-200 border border-strawberry-800'
                      : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'
                  } transition-colors duration-300`}
                >
                  <MessageSquare size={14} className="mr-2" />
                  {type.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <button 
              onClick={generateMessage}
              className="btn-primary flex items-center"
            >
              <RefreshCw size={16} className="mr-2" />
              Generate Message
            </button>
          </div>
          
          {generatedMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-black/40 border border-gray-800 rounded-md p-4 mb-4"
            >
              <div className="flex justify-between items-start">
                <p className="text-lg font-serif text-gray-200 italic">"{generatedMessage}"</p>
                <button 
                  onClick={copyToClipboard}
                  className="ml-3 text-gray-400 hover:text-gray-200"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <MessageTemplate />
          <MessagePreview message={generatedMessage} />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 border border-gray-800 rounded-lg bg-black/50"
        >
          <h2 className="text-xl font-serif text-strawberry-200 mb-4">Crafting Effective Messages</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Use curiosity gaps - hint at information without full disclosure
            </li>
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Incorporate your established symbols consistently
            </li>
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Balance cryptic elements with enough context to spark interpretation
            </li>
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Vary your message types to maintain audience interest
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MessageGenerator;