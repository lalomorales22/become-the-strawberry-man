import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const MessageTemplate = () => {
  const templates = [
    {
      type: "Cryptic Statement",
      examples: [
        "The seeds know what the soil forgets.",
        "When vine meets frost, a new pattern emerges.",
        "Deep in the garden, the roots whisper their secrets."
      ]
    },
    {
      type: "Mysterious Question",
      examples: [
        "Have you felt the seeds shifting beneath the surface?",
        "What happens when the bloom finally reveals itself?",
        "Can you hear what the silent soil is trying to tell you?"
      ]
    },
    {
      type: "Paradoxical Thought",
      examples: [
        "To understand the bloom, one must first forget it exists.",
        "The vine grows stronger when it appears to wither.",
        "Only in darkness can the true color of the fruit be seen."
      ]
    },
    {
      type: "Foreshadowing Hint",
      examples: [
        "A change in the roots suggests what is to come.",
        "Those who watch the vines have already seen the first signs.",
        "Before the harvest, the soil will show subtle changes."
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <h2 className="text-xl font-serif text-gray-200 mb-4">Message Templates</h2>
      
      <div className="space-y-6">
        {templates.map((template, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-2">
              <Sparkles size={16} className="text-strawberry-500 mr-2" />
              <h3 className="text-lg text-strawberry-200 font-serif">{template.type}</h3>
            </div>
            <ul className="space-y-2 pl-6">
              {template.examples.map((example, i) => (
                <li key={i} className="text-gray-400 italic">"{example}"</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MessageTemplate;