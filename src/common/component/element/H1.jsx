"use client";
import { motion } from "framer-motion";
import React from "react";

export default function H1({ title, className }) {
  return (
    <div className={`${className} overflow-hidden w-auto px-2 relative flex  `}>
      <motion.h1
        initial={{ y: "95%" }}
        whileInView={{ y: "0%" }}
        transition={{
          type: "tween",
          ease: [0.8, 0.2, 0, 1],
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className={` relative bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFF7]  to-[#727267]`}
      >
        {title}
      </motion.h1>
    </div>
  );
}
