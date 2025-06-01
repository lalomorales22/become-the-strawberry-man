import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cherry as Strawberry, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Persona Builder', path: '/persona-builder' },
    { name: 'Message Generator', path: '/message-generator' },
    { name: 'Symbol Library', path: '/symbol-library' },
    { name: 'Audience Engagement', path: '/audience-engagement' },
    { name: 'Narrative Journal', path: '/narrative-journal' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black/60 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Strawberry className="h-8 w-8 text-strawberry-600" />
            <span className="text-xl font-serif text-strawberry-100">Strawberry Man</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm ${
                  location.pathname === item.path
                    ? 'text-strawberry-400 bg-gray-900'
                    : 'text-gray-300 hover:text-strawberry-300 hover:bg-gray-900'
                } transition-colors duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base ${
                  location.pathname === item.path
                    ? 'text-strawberry-400 bg-gray-800'
                    : 'text-gray-300 hover:text-strawberry-300 hover:bg-gray-800'
                } transition-colors duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;