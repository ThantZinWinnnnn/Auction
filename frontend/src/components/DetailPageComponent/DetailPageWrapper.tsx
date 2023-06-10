import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const DetailPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 1 },
          type: "spring",
        }}
        exit={{ opacity: 0, y: -20 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default DetailPageWrapper;
