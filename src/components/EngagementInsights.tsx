import { motion } from 'framer-motion';
import { TrendingUp, MessageSquare, Users, Clock } from 'lucide-react';

const EngagementInsights = () => {
  // Sample data - in a real app this would come from an API or state
  const engagementData = {
    messageMetrics: [
      { name: 'Avg. Likes', value: '23', change: '+12%', positive: true },
      { name: 'Avg. Replies', value: '8', change: '+5%', positive: true },
      { name: 'Avg. Shares', value: '15', change: '+18%', positive: true },
      { name: 'Speculation Score', value: '74/100', change: '+7', positive: true },
    ],
    topPerforming: [
      { message: "The roots grow deeper as the storm approaches...", engagement: 47 },
      { message: "Have you noticed the pattern in the soil's memory?", engagement: 38 },
      { message: "When the seed dreams, the vine awakens.", engagement: 31 },
    ],
    recentSpeculations: [
      { topic: "The meaning of 'roots'", intensity: 85 },
      { topic: "Connection to climate change", intensity: 62 },
      { topic: "Hidden message in imagery", intensity: 58 },
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-serif text-strawberry-300 flex items-center mb-6">
            <TrendingUp size={18} className="mr-2" />
            Message Metrics
          </h2>
          
          <div className="grid grid-cols-2 gap-6">
            {engagementData.messageMetrics.map((metric, i) => (
              <div key={i} className="bg-gray-900/60 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">{metric.name}</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl text-gray-200">{metric.value}</p>
                  <p className={`text-xs ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-serif text-strawberry-300 flex items-center mb-6">
            <MessageSquare size={18} className="mr-2" />
            Top Performing Content
          </h2>
          
          <div className="space-y-4">
            {engagementData.topPerforming.map((item, i) => (
              <div key={i} className="bg-gray-900/60 rounded-lg p-4">
                <p className="text-gray-300 font-serif italic mb-2">"{item.message}"</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Users size={14} className="text-gray-500 mr-1" />
                    <span className="text-xs text-gray-500">{item.engagement} engagements</span>
                  </div>
                  <button className="text-xs text-strawberry-400 hover:text-strawberry-300">
                    Analyze
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-serif text-strawberry-300 flex items-center mb-6">
          <Clock size={18} className="mr-2" />
          Recent Audience Speculations
        </h2>
        
        <div className="space-y-4">
          {engagementData.recentSpeculations.map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <p className="text-gray-200">{item.topic}</p>
                <p className="text-sm text-gray-500">Speculation intensity: {item.intensity}/100</p>
              </div>
              <div className="w-24 h-3 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    item.intensity > 80 ? 'bg-strawberry-600' : 
                    item.intensity > 60 ? 'bg-strawberry-700' : 
                    'bg-strawberry-900'
                  }`} 
                  style={{ width: `${item.intensity}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 border border-gray-800 rounded-md bg-black/30">
          <h3 className="text-gray-200 font-medium mb-2">Insight</h3>
          <p className="text-gray-400">
            Audiences are currently most engaged with environmental themes in your symbolism. 
            Consider leaning into "root" and "soil" metaphors in upcoming messages to amplify this engagement.
          </p>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-6 border border-gray-800 rounded-lg bg-black/50"
      >
        <h2 className="text-xl font-serif text-strawberry-200 mb-4">Engagement Strategy Tips</h2>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-strawberry-500 mr-2">•</span> 
            Monitor which symbols generate the most speculation and develop those further
          </li>
          <li className="flex items-start">
            <span className="text-strawberry-500 mr-2">•</span> 
            Use strategic silence between high-engagement posts to build anticipation
          </li>
          <li className="flex items-start">
            <span className="text-strawberry-500 mr-2">•</span> 
            Acknowledge active interpreters without confirming or denying their theories
          </li>
          <li className="flex items-start">
            <span className="text-strawberry-500 mr-2">•</span> 
            Create subtle connections between messages to reward attentive followers
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default EngagementInsights;