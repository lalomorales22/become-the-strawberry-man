import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, TrendingUp, UserPlus, ArrowRight, Twitter, Linkedin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { AreaChart, Card, Title, Text } from '@tremor/react';
import EngagementInsights from '../components/EngagementInsights';
import AudienceSpeculation from '../components/AudienceSpeculation';
import SocialMetrics from '../components/SocialMetrics';

const AudienceEngagement = () => {
  const [activeTab, setActiveTab] = useState('insights');
  
  const tabs = [
    { id: 'insights', label: 'Engagement Insights', icon: <TrendingUp size={16} /> },
    { id: 'social', label: 'Social Analytics', icon: <Users size={16} /> },
    { id: 'speculation', label: 'Manage Speculation', icon: <MessageSquare size={16} /> },
    { id: 'followers', label: 'Key Followers', icon: <UserPlus size={16} /> },
  ];

  const socialPlatforms = [
    { id: 'twitter', name: 'Twitter/X', icon: <Twitter />, color: 'bg-blue-400' },
    { id: 'linkedin', name: 'LinkedIn', icon: <Linkedin />, color: 'bg-blue-600' },
    { id: 'facebook', name: 'Facebook', icon: <Facebook />, color: 'bg-blue-500' },
    { id: 'instagram', name: 'Instagram', icon: <Instagram />, color: 'bg-pink-500' },
    { id: 'youtube', name: 'YouTube', icon: <Youtube />, color: 'bg-red-600' },
    { id: 'reddit', name: 'Reddit', icon: <MessageCircle />, color: 'bg-orange-500' }
  ];

  const chartdata = [
    {
      date: '2024-01',
      Twitter: 100,
      LinkedIn: 80,
      Facebook: 60,
      Instagram: 150,
      YouTube: 30,
      Reddit: 45,
    },
    {
      date: '2024-02',
      Twitter: 150,
      LinkedIn: 100,
      Facebook: 80,
      Instagram: 180,
      YouTube: 45,
      Reddit: 60,
    },
    // Add more data points as needed
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-serif text-strawberry-100">Audience Engagement</h1>
          <div className="bg-gray-900/60 rounded-full px-4 py-2 flex items-center">
            <Users size={16} className="text-strawberry-400 mr-2" />
            <span className="text-gray-300">Total Reach: 127K</span>
          </div>
        </div>
        
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
        
        {activeTab === 'insights' && <EngagementInsights />}
        {activeTab === 'social' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {socialPlatforms.map((platform) => (
                <Card key={platform.id} className="bg-gray-900/60 border border-gray-800">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${platform.color}`}>
                      {platform.icon}
                    </div>
                    <div>
                      <Title className="text-gray-200">{platform.name}</Title>
                      <Text className="text-gray-400">Connected</Text>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-gray-200 py-2 rounded-lg transition-colors">
                    Pull Analytics
                  </button>
                </Card>
              ))}
            </div>

            <Card className="bg-gray-900/60 border border-gray-800">
              <Title className="text-gray-200 mb-4">Cross-Platform Engagement Trends</Title>
              <AreaChart
                className="h-72 mt-4"
                data={chartdata}
                index="date"
                categories={["Twitter", "LinkedIn", "Facebook", "Instagram", "YouTube", "Reddit"]}
                colors={["blue", "sky", "indigo", "rose", "red", "orange"]}
              />
            </Card>

            <SocialMetrics />
          </div>
        )}
        {activeTab === 'speculation' && <AudienceSpeculation />}
        {activeTab === 'followers' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="card">
              <h2 className="text-xl font-serif text-strawberry-300 mb-4">Key Interpreters</h2>
              <p className="text-gray-400 mb-6">These followers are actively interpreting your content and influencing the community narrative.</p>
              
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-800 py-4 last:border-0">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300">
                      {['M', 'J', 'K'][index]}
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-200">{['MysteryHunter', 'JourneySeeker', 'KeysToEden'][index]}</p>
                      <p className="text-gray-500 text-sm">Interpretation focus: {['Symbolic patterns', 'Hidden meanings', 'Technical connections'][index]}</p>
                    </div>
                  </div>
                  <button className="text-strawberry-400 hover:text-strawberry-300 flex items-center text-sm">
                    Amplify <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default AudienceEngagement;