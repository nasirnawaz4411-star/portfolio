"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({ className = "", children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
