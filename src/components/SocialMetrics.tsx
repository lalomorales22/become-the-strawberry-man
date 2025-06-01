import { Card, Title, Text, BarChart, DonutChart } from '@tremor/react';

const SocialMetrics = () => {
  const engagementData = [
    {
      platform: 'Twitter/X',
      likes: 2300,
      comments: 450,
      shares: 780,
    },
    {
      platform: 'LinkedIn',
      likes: 1200,
      comments: 280,
      shares: 340,
    },
    {
      platform: 'Facebook',
      likes: 3400,
      comments: 890,
      shares: 560,
    },
    {
      platform: 'Instagram',
      likes: 5600,
      comments: 1200,
      shares: 890,
    },
    {
      platform: 'YouTube',
      likes: 890,
      comments: 340,
      shares: 120,
    },
    {
      platform: 'Reddit',
      likes: 1600,
      comments: 780,
      shares: 230,
    },
  ];

  const audienceData = [
    { name: 'Tech Enthusiasts', value: 35 },
    { name: 'Philosophy Fans', value: 25 },
    { name: 'Mystery Seekers', value: 20 },
    { name: 'Artists', value: 15 },
    { name: 'Others', value: 5 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-gray-900/60 border border-gray-800">
        <Title className="text-gray-200">Engagement Distribution</Title>
        <Text className="text-gray-400">Likes, comments, and shares across platforms</Text>
        <BarChart
          className="mt-6"
          data={engagementData}
          index="platform"
          categories={["likes", "comments", "shares"]}
          colors={["blue", "teal", "amber"]}
          stack={false}
        />
      </Card>

      <Card className="bg-gray-900/60 border border-gray-800">
        <Title className="text-gray-200">Audience Demographics</Title>
        <Text className="text-gray-400">Interest-based segmentation</Text>
        <DonutChart
          className="mt-6"
          data={audienceData}
          category="value"
          index="name"
          colors={["rose", "cyan", "amber", "purple", "indigo"]}
        />
      </Card>
    </div>
  );
};

export default SocialMetrics;