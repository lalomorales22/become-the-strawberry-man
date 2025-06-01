import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Loader } from 'lucide-react';

const AISymbolGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSymbol = async () => {
    setIsGenerating(true);
    // AI generation logic would go here
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="card"
    >
      <div className="flex items-center mb-4">
        <Sparkles size={18} className="text-strawberry-400 mr-2" />
        <h3 className="text-lg font-serif">AI Symbol Generator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Describe Your Symbol</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the concept, emotion, or idea you want to symbolize..."
            className="input-field h-24"
          />
        </div>

        <button
          onClick={generateSymbol}
          disabled={isGenerating || !prompt}
          className="btn-primary w-full flex items-center justify-center"
        >
          {isGenerating ? (
            <>
              <Loader size={16} className="animate-spin mr-2" />
              Generating Symbol...
            </>
          ) : (
            <>
              <Sparkles size={16} className="mr-2" />
              Generate Symbol
            </>
          )}
        </button>

        <div className="bg-black/30 p-4 rounded-lg">
          <p className="text-sm text-gray-400">
            AI will analyze your description and generate a symbol complete with:
            <ul className="list-disc ml-4 mt-2 space-y-1">
              <li>Visual representation suggestions</li>
              <li>Potential meanings and interpretations</li>
              <li>Cultural and historical connections</li>
              <li>Usage recommendations</li>
            </ul>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AISymbolGenerator;