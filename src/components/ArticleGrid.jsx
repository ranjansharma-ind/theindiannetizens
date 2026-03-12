import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import oneimage from '../assets/images/one.avif'
import two from '../assets/images/two.avif'
import three from '../assets/images/three.avif'
import four from '../assets/images/four.avif'

const articles = [
  {
    id: 1,
    title: 'India’s Trade Policy Shift: From Free Trade Agreements to Strategic Protectionism',
    category: 'Trade & Economics',
    date: 'February 2026',
    image: oneimage, // Container ship/trade
    link: '#'
  },
  {
    id: 2,
    title: 'Generation Z’s Asian Spring: How a Betrayed Generation Is Rewriting South Asia’s Politics',
    category: 'Regional Politics',
    date: 'January 2026',
    image: two, // Youth/protest
    link: '#'
  },
  {
    id: 3,
    title: 'An Unstable Philippines take ASEAN Chairmanship amidst Domestic Turmoil',
    category: 'Geopolitics',
    date: 'December 2025',
    image: three, // Manila/philippines
    link: '#'
  },
  {
    id: 4,
    title: "India's dependency on Russia for Defence projects: Walking a tight rope",
    category: 'Defence & Security',
    date: 'November 2025',
    image: four, // abstract military
    link: '#'
  },
  {
    id: 5,
    title: 'Digital Public Infrastructure: India’s Soft Power Export to the Global South',
    category: 'Technology',
    date: 'October 2025',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop', // Tech/global
    link: '#'
  },
  {
    id: 6,
    title: 'Climate Diplomacy in the Indo-Pacific: Securing Green Supply Chains',
    category: 'Environment',
    date: 'September 2025',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop', // Green/wind turbines
    link: '#'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 70,
      damping: 15
    }
  })
};

const ArticleCard = ({ article, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group bg-navy rounded-2xl shadow-md overflow-hidden flex flex-col h-[400px] cursor-pointer transform-gpu isolate"
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          filter: isHovered ? 'blur(2px) brightness(0.4)' : 'blur(0px) brightness(0.8)'
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Persistent gradient overlay for readability when not hovered */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* Floating Like Button */}
      <button 
        onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors"
      >
        <Heart 
          size={18} 
          className={`transition-colors duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} 
        />
      </button>

      {/* Content Container */}
      <div className="relative z-10 p-8 flex flex-col h-full justify-end">
        <span className="text-saffron text-xs font-bold tracking-wider uppercase mb-3 drop-shadow-md">
          {article.category}
        </span>
        
        <h3 className="text-2xl font-bold text-white mb-2 leading-snug drop-shadow-md">
          {article.title}
        </h3>

        {/* Hover Reveal Content */}
        <div className="overflow-hidden">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col gap-4"
              >
                <div className="flex justify-between items-center text-gray-300 text-sm font-medium">
                  <span>{article.date}</span>
                  <span>5 min read</span>
                </div>
                
                <a 
                  href={article.link} 
                  className="mt-2 bg-saffron text-white py-3 px-6 rounded-full font-bold text-center flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors"
                >
                  Learn More <ArrowRight size={18} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
};

const ArticleGrid = () => {
  return (
    <section className="py-24 px-8 mx-auto bg-gray-100" id="articles">
      <div className="flex justify-between items-end mb-16">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-2 block">Insights</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy">Recent Posts</h2>
        </motion.div>
      </div>

      {/* 6 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <ArticleCard key={article.id} article={article} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;
