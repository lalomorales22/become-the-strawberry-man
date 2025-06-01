import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Plus, Trash2 } from 'lucide-react';
import { format, addDays } from 'date-fns';

const NarrativeJournal = () => {
  const [narrativeEvents, setNarrativeEvents] = useState([
    { 
      id: 1, 
      title: "First Seed", 
      date: format(new Date(), 'yyyy-MM-dd'),
      description: "Initial cryptic messages to establish the persona and core symbolism.",
      status: "completed",
      notes: "Used strawberry and vine imagery. Generated significant early curiosity."
    },
    { 
      id: 2, 
      title: "Strategic Silence", 
      date: format(addDays(new Date(), 3), 'yyyy-MM-dd'),
      description: "Period of no posting to build anticipation after initial interest.",
      status: "planned",
      notes: "Plan for 48-72 hours of silence to generate 'where did they go?' speculation."
    },
    { 
      id: 3, 
      title: "The First Bloom", 
      date: format(addDays(new Date(), 5), 'yyyy-MM-dd'),
      description: "Series of interconnected posts about a 'transformation' or 'awakening'.",
      status: "planned",
      notes: "Will introduce the 'bloom' symbol and hint at a coming revelation."
    },
    { 
      id: 4, 
      title: "Frost Warning", 
      date: format(addDays(new Date(), 12), 'yyyy-MM-dd'),
      description: "Shift tone to suggest a challenge or setback in the narrative.",
      status: "planned",
      notes: "Introduce mild tension to the narrative arc."
    }
  ]);
  
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: format(addDays(new Date(), 7), 'yyyy-MM-dd'),
    description: '',
    notes: '',
    status: 'planned'
  });
  
  const addNarrativeEvent = () => {
    if (newEvent.title && newEvent.description) {
      setNarrativeEvents([
        ...narrativeEvents,
        {
          id: narrativeEvents.length + 1,
          ...newEvent
        }
      ]);
      
      setNewEvent({
        title: '',
        date: format(addDays(new Date(), 7), 'yyyy-MM-dd'),
        description: '',
        notes: '',
        status: 'planned'
      });
    }
  };
  
  const removeEvent = (id: number) => {
    setNarrativeEvents(narrativeEvents.filter(event => event.id !== id));
  };
  
  const handleInputChange = (field: string, value: string) => {
    setNewEvent({
      ...newEvent,
      [field]: value
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-serif text-strawberry-100 mb-6">Narrative Journal</h1>
        
        <div className="card mb-8">
          <h2 className="text-xl font-serif text-strawberry-300 flex items-center mb-6">
            <Calendar size={18} className="mr-2" />
            Narrative Timeline
          </h2>
          
          <div className="space-y-6 mb-8">
            {narrativeEvents.map((event) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`border-l-4 pl-4 py-2 ${
                  event.status === 'completed' ? 'border-growth-600' : 'border-gray-600'
                }`}
              >
                <div className="flex justify-between">
                  <h3 className="text-lg text-gray-200 font-medium">{event.title}</h3>
                  <button 
                    onClick={() => removeEvent(event.id)}
                    className="text-gray-500 hover:text-strawberry-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock size={14} className="mr-1" />
                  <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
                  <span className={`ml-3 px-2 py-0.5 rounded text-xs ${
                    event.status === 'completed' ? 'bg-growth-900 text-growth-300' : 'bg-gray-800 text-gray-300'
                  }`}>
                    {event.status === 'completed' ? 'Completed' : 'Planned'}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-2">{event.description}</p>
                
                {event.notes && (
                  <div className="bg-black/30 p-3 rounded-md mt-2">
                    <p className="text-sm text-gray-400 italic">{event.notes}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-lg font-serif text-strawberry-200 mb-4 flex items-center">
              <Plus size={16} className="mr-2" />
              Add Narrative Event
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-300 mb-2">Event Title</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., The First Bloom, Strategic Silence"
                  className="input-field"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Planned Date</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="What is this narrative event about?"
                className="input-field h-20"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Notes (Optional)</label>
              <textarea
                value={newEvent.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Any additional notes or strategy for this event"
                className="input-field h-16"
              />
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={addNarrativeEvent}
                className="btn-primary"
                disabled={!newEvent.title || !newEvent.description}
              >
                Add to Timeline
              </button>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 border border-gray-800 rounded-lg bg-black/50"
        >
          <h2 className="text-xl font-serif text-strawberry-200 mb-4">Narrative Planning Tips</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Use strategic silence to build anticipation between significant narrative events
            </li>
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Plan narrative arcs with rising tension, mystery, and subtle resolution
            </li>
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Include moments of symbolic transformation to keep the narrative evolving
            </li>
            <li className="flex items-start">
              <span className="text-strawberry-500 mr-2">•</span> 
              Periodically revisit and reinforce established symbols to maintain continuity
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NarrativeJournal;