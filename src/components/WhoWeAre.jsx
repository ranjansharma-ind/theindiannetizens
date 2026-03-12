import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

  return (
    <section className="relative py-32 px-6 min-h-[100vh] overflow-hidden" id="about">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1674591172888-1184c4170a47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0b1223]/70 via-[#0b1223]/80 to-[#0b1223]/95 backdrop-blur-sm" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <motion.h2
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          {titleWords.map((word, i) => {
            let colorClass = "text-[#FFFFFF]";
            if (i === 0) colorClass = "text-[#FF9933]";
            if (i === 1) colorClass = "text-[#4B5320]";

            return (
              <motion.span
                key={i}
                variants={wordVars}
                className={`inline-block mr-[0.25em] ${colorClass}`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          className="text-xl md:text-2xl text-gray-200 mb-12 font-light leading-relaxed"
        >
          <br />
          We are a youth-led think tank focused on amplifying India's strategic
          voice in a multipolar world. We engage in research, public policy,
          digital diplomacy, and advocacy, empowering young minds through
          publications, webinars, and media initiatives. Our mission is to
          inform, inspire, and impact with a professional and proactive,
          India-first approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            href="#about-details"
            className="inline-flex items-center gap-2 bg-saffron text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:shadow-lg hover:shadow-saffron/20 transition-all duration-300 group"
          >
            Read More
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
