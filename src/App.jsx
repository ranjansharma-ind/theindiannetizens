import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArticleGrid from './components/ArticleGrid';
import Centres from './components/Centres';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import WWR from './components/WhoWeAre'
import Footer from "./components/Footer"

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
          <Footer/>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
