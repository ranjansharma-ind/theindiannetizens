import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Twitter, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const centres = [
    "Legal Affairs & Studies Research Centre",
    "Security & Defence Studies Research Centre",
    "Global Affairs & Diplomacy Research Centre",
    "Governance & Public Policy Research Centre",
    "Internal Affairs & Political Research Centre",
    "Economic & Infra Development Research Centre",
  ];

  const overview = [
    "Home",
    "About Us",
    "Articles",
    "Reports",
    "Magazine",
    "Core Team",
    "Meet the Founder",
    "Meet Our Advisors",
    "Meet Our Team",
    "Contact Us",
    "Join Our Team",
    "Govt of India",
  ];

  return (
    <footer className="relative overflow-hidden text-white mt-12">
      <div className="absolute inset-0 bg-blue-950" />
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-[#FF9933] via-white to-[#128807]" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-wide">The Indian Netizens</h3>
                <p className="text-xs opacity-80">Independent youth-led think-tank</p>
              </div>
            </div>

            <p className="text-sm opacity-80 leading-relaxed">
              Building an India-first research ecosystem—where strategy, diplomacy, and youth-led policy converge.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 transition-colors flex items-center justify-center"
                >
                  <social.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4">Our Centres</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {centres.map((centre) => (
                <li key={centre} className="hover:text-white transition-colors">
                  {centre}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4">Overview</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {overview.map((item) => (
                <li key={item} className="hover:text-white transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold tracking-wide uppercase mb-4">Contact</h4>
              <p className="text-sm opacity-80 leading-relaxed">
                Reach out to us for collaboration, research partnerships, or media inquiries.
              </p>
            </div>

            <div className="mt-6 text-sm opacity-80">
              <p>Privacy Policy | Terms of Use</p>
              <p className="mt-2">&copy; {new Date().getFullYear()} The Indian Netizens. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

