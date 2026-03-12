import React from 'react';
import { motion } from 'framer-motion';

const centres = [
  { id: 1, title: 'Legal Affairs & Studies', icon: '⚖️', color: 'bg-blue-50 text-blue-600' },
  { id: 2, title: 'Security & Defence Studies', icon: '��️', color: 'bg-green-50 text-green-600' },
  { id: 3, title: 'Global Affairs & Diplomacy', icon: '��', color: 'bg-orange-50 text-orange-600' },
  { id: 4, title: 'Governance & Public Policy', icon: '🏛️', color: 'bg-purple-50 text-purple-600' },
  { id: 5, title: 'Internal Affairs & Political', icon: '🗳️', color: 'bg-red-50 text-red-600' },
  { id: 6, title: 'Economic & Infra Development', icon: '📈', color: 'bg-teal-50 text-teal-600' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 100, damping: 12 } 
  }
};

const Centres = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="centres">
      <div className="text-center mb-16">
         <motion.span 
           initial={{ opacity: 0, y: -10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-saffron font-bold tracking-widest uppercase text-sm mb-2 block"
         >
           Our Core Pillars
         </motion.span>
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-4xl md:text-5xl font-bold text-navy"
         >
           Research Centres
         </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {centres.map((centre) => (
          <motion.div
            key={centre.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex items-start gap-4 group cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${centre.color} group-hover:scale-110 transition-transform duration-300`}>
              {centre.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy leading-tight mt-1 group-hover:text-saffron transition-colors">
                {centre.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 font-medium">Research Centre</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Centres;
