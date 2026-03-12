import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import parliamentImg from '../assets/images/parliament.png';

const Hero = () => {
  const titleWords = ["India's", "Next-Gen", "Think-Tank."];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const wordVars = {
    hidden: { opacity: 0, x: -30, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)', 
      transition: { type: 'spring', damping: 12, stiffness: 100 } 
    }
  };

  return (
    <section className="min-h-[90vh] pt-24 pb-12 flex items-center bg-gradient-to-br from-[#f5f8fc] via-white to-[#fff9f2] overflow-hidden relative">
      {/* Abstract Background Design Elements (Indian Tricolor subtle hints) */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] bg-[#FF9933] rounded-full filter blur-[100px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] bg-[#138808] rounded-full filter blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center text-left pt-10 lg:pt-0">
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-[#FF9933] block"></span>
            <span className="text-[#FF9933] font-extrabold tracking-[0.2em] uppercase text-xs">Empowering The Nation</span>
          </motion.div>

          <motion.h1
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-navy mb-8 tracking-tighter leading-[1.05]"
          >
            {titleWords.map((word, i) => {
              // Apply "Army/Govt" multicolor theme
              let colorClass = "text-[#000080]"; // Deep Navy Default
              if (i === 0) colorClass = "text-[#FF9933]"; // "India's" Saffron
              if (i === 1) colorClass = "text-[#4B5320]"; // "Next-Gen" Army Green
              
              return (
                 <motion.span key={i} variants={wordVars} className={`inline-block mr-[0.25em] ${colorClass}`}>
                  {word}
                </motion.span>
              )
            })}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
            className="text-xl md:text-2xl text-gray-700 mb-12 font-medium pl-5 border-l-[3px] border-[#4B5320]/30 leading-relaxed"
          >
            Driven by <span className="text-[#000080] font-bold">Vision</span>. 
            <br className="hidden sm:block"/>
            Powered by <span className="text-[#FF9933] font-bold">Youth</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, type: 'spring', damping: 20 }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(75, 83, 32, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4B5320] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#3A4018] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Discover
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 128, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-[#000080]/20 text-[#000080] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center hover:border-[#000080]"
            >
              Read Reports
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column: Animated Image */}
        <motion.div 
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, type: 'spring', damping: 25 }}
          className="relative flex justify-center lg:justify-end items-center h-full min-h-[400px]"
        >
          {/* Decorative rotating accent behind image referencing the Ashoka Chakra */}
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
             className="absolute w-[90%] sm:w-[80%] aspect-square border-2 border-dashed border-[#000080]/10 rounded-full -z-10 bg-white/40 backdrop-blur-3xl shadow-2xl"
          />
          
          {/* Floating parliament image */}
          <motion.img 
            src={parliamentImg} 
            alt="Indian Parliament" 
            className="relative z-10 w-full max-w-[120%] lg:max-w-2xl object-contain drop-shadow-[0_20px_50px_rgba(75,83,32,0.15)] filter saturate-110 contrast-105"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
