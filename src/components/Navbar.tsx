import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import YogaLogo from './YogaLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-ivory-50 shadow-md border-b border-ivory-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center flex-shrink-0">
            <YogaLogo size="lg" variant="primary" showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-lg font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-ivory-700 hover:text-primary'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary/20 transition-all duration-300 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              className="w-5 h-0.5 bg-primary mb-1 rounded-full"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-5 h-0.5 bg-primary mb-1 rounded-full"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-5 h-0.5 bg-primary rounded-full"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <motion.div
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden fixed top-16 left-0 right-0 mx-4 bg-ivory-50 shadow-2xl z-50 rounded-2xl overflow-hidden ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            y: isMobileMenuOpen ? 0 : -20,
            scale: isMobileMenuOpen ? 1 : 0.95
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="p-6">
            <div className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0, 
                    x: isMobileMenuOpen ? 0 : -20 
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'bg-primary text-white shadow-lg transform scale-105'
                        : 'text-ivory-700 hover:bg-ivory-100 hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <motion.div 
              className="mt-6 pt-6 border-t border-ivory-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="text-center">
                <p className="text-sm text-ivory-600 font-light mb-1">Sacred Yoga Ashram</p>
                <p className="text-sm text-ivory-600 font-light mb-1">Rishikesh, India</p>
                <p className="text-sm text-primary font-medium">+91 98765 43210</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar; 