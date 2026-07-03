/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useReducedMotion } from 'motion/react';

export default function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  // If the user prefers reduced motion, render a high-quality static background fallback
  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[140px]" />
        <div className="absolute top-[30%] right-[15%] w-[450px] h-[450px] rounded-full bg-amber-500/5 dark:bg-amber-500/2 blur-[110px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Layer 1: Ambient Teal fluid wave */}
      <motion.div
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 50% 60% 40% 60%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "40% 60% 70% 30% / 40% 50% 60% 50%"
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-15%] left-[-10%] w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full bg-gradient-to-tr from-teal-400/20 to-emerald-500/10 dark:from-teal-500/10 dark:to-emerald-600/5 blur-[100px] md:blur-[130px] mix-blend-screen dark:mix-blend-normal"
      />

      {/* Layer 2: Deep Indigo fluid flow */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -40, 0],
          scale: [1, 1.1, 0.85, 1],
          rotate: [360, 270, 180, 90, 0],
          borderRadius: [
            "50% 50% 30% 70% / 50% 60% 40% 60%",
            "30% 70% 70% 30% / 40% 30% 70% 60%",
            "60% 40% 50% 50% / 50% 40% 60% 50%",
            "50% 50% 30% 70% / 50% 60% 40% 60%"
          ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] md:w-[750px] md:h-[750px] rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/10 dark:from-blue-600/10 dark:to-indigo-800/5 blur-[100px] md:blur-[140px] mix-blend-screen dark:mix-blend-normal"
      />

      {/* Layer 3: Warm Creative Amber Flare */}
      <motion.div
        animate={{
          x: [0, 50, -40, 0],
          y: [0, 70, -50, 0],
          scale: [0.85, 1.1, 0.9, 0.85],
          rotate: [0, 180, 360],
          borderRadius: [
            "60% 40% 40% 60% / 60% 40% 60% 40%",
            "40% 60% 60% 40% / 40% 60% 40% 60%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "60% 40% 40% 60% / 60% 40% 60% 40%"
          ]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] right-[10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-amber-400/15 to-rose-500/5 dark:from-amber-500/5 dark:to-rose-600/2 blur-[80px] md:blur-[110px] mix-blend-screen dark:mix-blend-normal"
      />

      {/* Layer 4: Soft Purple balance wave */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, -30, 45, 0],
          scale: [1, 0.9, 1.15, 1],
          borderRadius: [
            "40% 60% 50% 50% / 50% 50% 50% 50%",
            "50% 50% 60% 40% / 40% 60% 50% 50%",
            "60% 40% 50% 50% / 50% 40% 60% 50%",
            "40% 60% 50% 50% / 50% 50% 50% 50%"
          ]
        }}
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[25%] left-[5%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-purple-500/15 to-indigo-500/10 dark:from-purple-600/5 dark:to-indigo-600/2 blur-[90px] md:blur-[120px] mix-blend-screen dark:mix-blend-normal"
      />
    </div>
  );
}
