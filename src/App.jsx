import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArticleGrid from './components/ArticleGrid';
import Centres from './components/Centres';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import WWR from './components/WhoWeAre'

function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-white text-navy font-sans overflow-x-hidden selection:bg-saffron selection:text-white">
        <Navbar />
        
        <main>
          <Hero />
          <ArticleGrid />
          <WWR/>
          <Centres />
        </main>
        
        <footer className="bg-navy text-white text-center py-10 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-8"
          >
            <p className="opacity-80 font-light tracking-wide text-sm mb-2">
              Made with <span className="text-red-500">❤</span> by Team Netizens
            </p>
            <p className="opacity-60 text-xs">
              &copy; {new Date().getFullYear()} The Indian Netizens. All Rights Reserved.
            </p>
          </motion.div>
        </footer>
      </div>
    </AnimatePresence>
  );
}

export default App;
