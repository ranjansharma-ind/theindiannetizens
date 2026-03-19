import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const InteractiveHoverButton = React.forwardRef(
  ({ text = "Read Reports", className, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 30px rgba(75, 83, 32, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        ref={ref}
        className={cn(
          "group relative cursor-pointer overflow-hidden border p-2 text-center font-semibold bg-transparent border-[#000080]/20 text-[#000080] px-8 py-4 rounded-full text-sm transition-all duration-300 flex items-center justify-center hover:border-[#000080]",
          className,
        )}
        {...props}
      >
        <span className="inline-block translate-x-1 w-32 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight />
        </div>
        <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-black transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-black"></div>
      </motion.button>
    );
  },
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
