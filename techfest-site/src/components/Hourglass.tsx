"use client";

import { motion } from "framer-motion";

export default function Hourglass() {
  return (
    <div className="hourglass-wrapper">

      <div className="hourglass-frame">

        <motion.div
          className="top-sand"
          animate={{
            scaleY: [1, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="bottom-sand"
          animate={{
            scaleY: [0.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="sand-stream"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
        />
      </div>
    </div>
  );
}