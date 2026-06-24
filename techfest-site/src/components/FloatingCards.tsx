"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  items: string[];
  radius: number;
}

export default function FloatingCards({
  items,
  radius,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [paused, items.length]);

  const visible = [
    items[index % items.length],
    items[(index + 1) % items.length],
  ];

  return (
    <div
      className="orbit-layer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {visible.map((item, i) => {
        const angle =
          ((index * 45 + i * 180) * Math.PI) / 180;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={item}
            className="floating-card"
            animate={{
              x,
              y,
            }}
            transition={{
              type: "spring",
              damping: 15,
            }}
          >
            {item}
          </motion.div>
        );
      })}
    </div>
  );
}