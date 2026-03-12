import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const links = ['Home', 'About Us', 'Articles', 'Magazine', 'Reports', 'Centres'];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled ? 'py-4 px-4 md:px-6' : 'bg-transparent py-6 px-8'}`}
      >
        <div 
          className={`mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(10,25,47,0.08)] rounded-full px-6 py-3 max-w-5xl border border-white/20 ring-1 ring-gray-900/5' : 'max-w-7xl'}`}
        >
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`font-bold tracking-tight flex-shrink-0 cursor-pointer transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'} text-navy`}
          >
            <span className="text-saffron">The</span>Indian<span className="font-light">Netizens</span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-1 xl:space-x-3">
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.3 + (i * 0.1),
                  type: 'spring',
                  stiffness: 100
                }}
                className="text-navy/80 hover:text-navy font-medium text-[13px] tracking-widest uppercase px-4 py-2 rounded-full hover:bg-gray-100/60 transition-all duration-300 relative group"
              >
                {link}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-saffron transition-all duration-300 group-hover:w-4 rounded-full"></span>
              </motion.a>
            ))}
          </div>
          
          {/* Desktop Actions */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1 }}
             className="hidden lg:flex items-center gap-5 flex-shrink-0"
          >
            <button className="bg-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-saffron hover:shadow-lg hover:shadow-saffron/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group">
              <User size={16} className="group-hover:text-white transition-colors duration-300" />
              Login
            </button>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center z-50">
             <button 
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
               className={`p-2 rounded-full transition-colors ${mobileMenuOpen ? 'bg-gray-100 text-navy' : 'text-navy hover:bg-gray-50'}`}
             >
               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="fixed inset-x-4 top-24 bg-white/95 backdrop-blur-xl shadow-2xl shadow-navy/10 rounded-3xl z-40 overflow-hidden border border-gray-100/50 lg:hidden"
          >
            <div className="flex flex-col p-6 space-y-2">
              {links.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-navy/80 hover:text-navy hover:bg-gray-50 font-semibold text-lg py-3 px-4 rounded-2xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              
              <div className="pt-6 mt-2 border-t border-gray-100 flex flex-col gap-3">
                <button className="w-full py-4 rounded-full bg-navy text-white font-semibold flex items-center justify-center gap-2 hover:bg-saffron transition-colors shadow-lg">
                  <User size={18} /> Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

