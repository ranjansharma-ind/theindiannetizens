import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Shield, Star } from "lucide-react";

const centres = [
  {
    id: 1,
    title: "Legal Affairs & Studies",
    subtitle: "Judicial Command",
    backgroundImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Security & Defence Studies",
    subtitle: "Strategic Operations",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Global Affairs & Diplomacy",
    subtitle: "Diplomatic Corps",
    backgroundImage:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Governance & Public Policy",
    subtitle: "Policy Brigade",
    backgroundImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Internal Affairs & Political",
    subtitle: "Domestic Intelligence",
    backgroundImage:
      "https://images.unsplash.com/photo-1680783954745-3249be59e527?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Economic & Infra Development",
    subtitle: "Development Corps",
    backgroundImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  },
];

const Centres = () => {
  const [currentIndex, setCurrentIndex] = useState(4);
  // const visibleCards = 4;
  // const totalCards = centres.length;

  // Duplicate centres for seamless loop
  const duplicatedCentres = [...centres, ...centres, ...centres];

  // responsive cards
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCurrentIndex(1);
      else if (window.innerWidth < 1024) setCurrentIndex(2);
      else if (window.innerWidth < 1280) setCurrentIndex(3);
      else setCurrentIndex(4);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      className="py-24 px-8 mx-auto relative overflow-hidden"
      id="centres"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933] via-white to-[#128807] transform rotate-12 scale-150"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF9933] to-[#FF6B35] text-white px-6 py-2 rounded-full font-bold text-sm mb-4 shadow-lg"
          >
            <Star className="w-4 h-4" />
            SIX PILLARS OF KNOWLEDGE
            <Star className="w-4 h-4" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl p-2 md:text-6xl mb-6 font-bold bg-gradient-to-r from-[#0b1223] via-[#FF9933] to-[#128807] bg-clip-text text-transparent"
          >
            Strategic Research Divisions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-700 mb-12 font-light leading-relaxed max-w-4xl mx-auto"
          >
            In a nation as diverse and dynamic as India, knowledge isn't just an
            asset, it's an instrument of change. The Indian Netizens' six
            dedicated research centres serve as platforms where rigorous thought
            meets real-world relevance. These centres, each with a unique
            thematic focus, aim to decode, document, and drive conversations
            that define India’s past, present, and future across diplomacy,
            governance, law, security, economy, and internal dynamics. From
            youth-led policy thinking to in-depth analysis of global and
            national issues, our research ecosystem is built to amplify India’s
            voice: fearlessly, factually, and forward-looking.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden max-w-7xl mx-auto">
          <motion.div
            className="flex gap-6"
            animate={{ x: [currentIndex, "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 0,
            }}
            style={{
              width: `${(duplicatedCentres.length / currentIndex) * 90}%`,
            }}
          >
            {duplicatedCentres.map((centre, index) => (
              <motion.div
                key={`${centre.id}-${index}`}
                className="relative w-1/4 h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${centre.backgroundImage}")`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <h3 className="text-xl font-bold mb-2 leading-tight">
                      {centre.title}
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
                      {centre.subtitle}
                    </p>
                  </motion.div>
                </div>

                {/* Rank Badge */}
                {/* <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#FF9933] to-[#FF6B35] flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xs">
                    {centre.id}
                  </span>
                </div> */}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FF9933] via-white to-[#128807] text-gray-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Shield className="w-5 h-5" />
            Join the Strategic Command
            <Shield className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Centres;
