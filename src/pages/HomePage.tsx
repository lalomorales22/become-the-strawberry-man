import { motion } from 'framer-motion';
import { Cherry as Strawberry, Scaling as Seedling, Users, Layers, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      title: "Cultivate Your Persona",
      description: "Create an enigmatic identity with our guided persona builder, establishing your symbolic foundation.",
      icon: <Seedling className="w-10 h-10 text-growth-400" />,
      link: "/persona-builder"
    },
    {
      title: "Craft Cryptic Messages",
      description: "Generate mysterious, thought-provoking content using our symbolic language system.",
      icon: <Layers className="w-10 h-10 text-earth-400" />,
      link: "/message-generator"
    },
    {
      title: "Engage Your Audience",
      description: "Track audience speculation and strategically guide interpretation of your enigmatic narrative.",
      icon: <Users className="w-10 h-10 text-strawberry-400" />,
      link: "/audience-engagement"
    },
    {
      title: "Plan Your Narrative",
      description: "Schedule strategic silence and revelation to maintain your mystique over time.",
      icon: <CalendarDays className="w-10 h-10 text-growth-500" />,
      link: "/narrative-journal"
    }
  ];

  return (
    <div className="min-h-screen">
      <motion.section 
        className="py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <Strawberry size={80} className="text-strawberry-600" />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 text-strawberry-100"
        >
          Become The Strawberry Man
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 font-serif italic"
        >
          The seeds are sown. Not all will see the fruit.
        </motion.p>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Create your enigmatic online persona. Craft cryptic messages. 
          Engage your audience in participatory sense-making. 
          Cultivate intrigue through strategic ambiguity.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link 
            to="/persona-builder" 
            className="btn-primary text-lg px-8 py-3 font-medium"
          >
            Begin Your Journey
          </Link>
        </motion.div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16 text-strawberry-200">
            The Path to Digital Mystique
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="card hover:border-strawberry-900 transition-colors duration-500"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-center mb-3 text-strawberry-100">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center mb-6">
                  {feature.description}
                </p>
                <div className="text-center">
                  <Link 
                    to={feature.link} 
                    className="text-strawberry-400 hover:text-strawberry-300 font-medium"
                  >
                    Explore →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section 
        className="py-16 my-16 bg-gradient-to-r from-black via-gray-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-8 text-strawberry-200">
            Cultivate Intrigue. Inspire Thought.
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg cryptic-message">
            "The vine connects all. Some see only the fruit, not the path it took through the soil. 
            Rain nourishes both blossom and worm."
          </p>
          
          <Link 
            to="/message-generator" 
            className="btn-secondary text-lg px-8 py-3 font-medium"
          >
            Craft Your First Message
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;