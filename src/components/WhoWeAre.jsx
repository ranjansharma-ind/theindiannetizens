import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Globe, Heart } from "lucide-react";

const WhoWeAre = () => {
  const titleWords = ["Who", "We", "Are"];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVars = {
    hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  const cardVars = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-32 px-6 min-h-[90vh] overflow-hidden" id="about">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=1221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-br from-[#0b1223]/70 via-[#0b1223]/80 to-[#0b1223]/95 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight text-center"
        >
          {titleWords.map((word, i) => {
            let colorClass = "text-white";
            if (i === 0) colorClass = "bg-gradient-to-r from-[#FF9933] to-[#FF6B35] bg-clip-text text-transparent";
            if (i === 1) colorClass = "bg-gradient-to-r from-[#4B5320] to-[#228B22] bg-clip-text text-transparent";

            return (
              <motion.span
                key={i}
                variants={wordVars}
                className={`inline-block mr-4 ${colorClass}`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-16 text-center font-light leading-relaxed"
        >
          Empowering India's voice in a changing world through youth-led innovation and strategic thinking.
        </motion.p>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-200 leading-relaxed">
              We are a dynamic youth-led think tank dedicated to amplifying India's strategic presence in the global arena. Our mission is to bridge the gap between policy, technology, and public discourse, fostering informed decision-making that serves India's interests.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Through cutting-edge research, digital diplomacy initiatives, and grassroots advocacy, we empower the next generation of Indian leaders to navigate complex geopolitical landscapes with confidence and clarity.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20">
                Research-Driven
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20">
                Youth-Led
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20">
                India-First
              </span>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div
              variants={cardVars}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <Users className="w-8 h-8 text-[#FF9933] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-300 text-sm">Building a network of passionate young minds committed to India's future.</p>
            </motion.div>

            <motion.div
              variants={cardVars}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <Target className="w-8 h-8 text-[#4B5320] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Impact</h3>
              <p className="text-gray-300 text-sm">Driving real change through policy recommendations and strategic initiatives.</p>
            </motion.div>

            <motion.div
              variants={cardVars}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <Globe className="w-8 h-8 text-[#FF6B35] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-gray-300 text-sm">Connecting Indian perspectives with international dialogues and partnerships.</p>
            </motion.div>

            <motion.div
              variants={cardVars}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <Heart className="w-8 h-8 text-[#228B22] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Authenticity</h3>
              <p className="text-gray-300 text-sm">Staying true to our roots while embracing innovation and progress.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#about-details"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF9933] to-[#FF6B35] text-white px-8 py-4 rounded-full font-bold text-md hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 group"
          >
            Discover Our Story
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
