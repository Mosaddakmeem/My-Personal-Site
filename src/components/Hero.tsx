/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles, Send, LayoutTemplate } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { SectionId } from '../types';
import AnimatedBackground from './AnimatedBackground';
import mimImage from '@/assets/mim.jpg';

interface HeroProps {
  onNavClick: (section: SectionId) => void;
}

const ROLES = [
  'Visual Storyteller',
  'Brand Designer',
  'Cinematographer',
  'Content Strategist'
];

export default function Hero({ onNavClick }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle role subtitle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Split name for staggered entrance
  const nameWords = `Hi, I'm ${PERSONAL_INFO.name}`.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B111E] dark:bg-[#030712] transition-colors duration-300"
    >
      {/* Premium Fluid Animated Color Backgrounds (Framer Motion Mesh Gradient) */}
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Tagline / Indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-700 dark:text-teal-400 font-mono text-xs font-semibold mb-6 uppercase tracking-wider"
          >
            <Sparkles size={12} className="animate-spin-slow" />
            <span>{PERSONAL_INFO.title}</span>
          </motion.div>

          {/* Headline with staggered letter reveal */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-100 dark:text-white leading-[1.1] mb-6"
            id="hero-name"
          >
            {nameWords.map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className="inline-block mr-3 md:mr-4"
              >
                {word === 'Shorif' || word === 'Mosaddak' ? (
                  <span className="text-gradient font-extrabold">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          {/* Rotating Role Subtitle */}
          <div className="h-10 md:h-14 mb-6 overflow-hidden flex items-center">
            <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase mr-3">
              Focus:
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="font-display text-xl md:text-3xl font-semibold text-slate-100 dark:text-slate-100 tracking-tight border-b-2 border-teal-500/40"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Paragraph Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-slate-300 dark:text-slate-300 leading-relaxed font-light mb-10 max-w-2xl"
            id="hero-bio"
          >
            {PERSONAL_INFO.bio.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 items-center w-full sm:w-auto"
            id="hero-ctas"
          >
            {/* View Work Primary */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavClick('design')}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 dark:bg-white dark:hover:bg-teal-50 text-white dark:text-slate-950 font-display text-sm font-semibold uppercase tracking-wider px-6 py-4 rounded-lg transition-colors cursor-pointer shadow-lg shadow-slate-950/10 dark:shadow-white/5"
            >
              <LayoutTemplate size={16} />
              <span>View My Work</span>
            </motion.button>

            {/* Get In Touch Secondary */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavClick('contact')}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-slate-800/50 dark:hover:bg-slate-900/50 text-slate-200 dark:text-slate-200 border border-slate-700 dark:border-slate-800 font-display text-sm font-semibold uppercase tracking-wider px-6 py-4 rounded-lg transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
              <Send size={14} />
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column: Creative Visual Placeholder Layout */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 border border-slate-800 dark:border-slate-800 p-4 flex flex-col justify-between shadow-2xl overflow-hidden group"
          >
            {/* Abstract dynamic lines with loaded Portrait Photo background */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={mimImage}
                alt="Mosaddak Shorif - Visual Advocacy & Grassroots Documentation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-45 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-in-out filter brightness-[0.85] contrast-[1.05]"
              />
              {/* Overlay Gradient to preserve high text contrast & legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E]/95 via-[#0B111E]/40 to-[#0B111E]/75" />
              <div className="absolute inset-0 bg-radial-gradient from-teal-500/10 via-transparent to-transparent opacity-50" />
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full border border-teal-500/10 animate-spin-slow flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-dashed border-teal-500/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-teal-500/30 flex items-center justify-center">
                    <span className="font-mono text-[9px] text-teal-500/60 tracking-widest uppercase">MBS.STORY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Indicator */}
            <div className="flex items-center justify-between z-10">
              <span className="font-mono text-[10px] text-teal-600 dark:text-teal-400 tracking-wider">CREATIVE FIELD RECORD</span>
              <div className="flex space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">REC</span>
              </div>
            </div>

            {/* Stylized focal bracket representing a field lens */}
            <div className="absolute inset-10 border-l border-t border-slate-300 dark:border-slate-800 w-6 h-6 rounded-tl-md" />
            <div className="absolute inset-y-10 right-10 border-r border-t border-slate-300 dark:border-slate-800 w-6 h-6 rounded-tr-md" />
            <div className="absolute inset-x-10 bottom-10 border-l border-b border-slate-300 dark:border-slate-800 w-6 h-6 rounded-bl-md" />
            <div className="absolute bottom-10 right-10 border-r border-b border-slate-300 dark:border-slate-800 w-6 h-6 rounded-br-md" />

            {/* Center Focus Details */}
            <div className="my-auto text-center z-10 flex flex-col items-center justify-center px-4">
              <span className="font-display font-bold text-2xl text-slate-100 dark:text-white mb-2 leading-tight">
                VISUAL ADVOCACY
              </span>
              <span className="font-mono text-xs text-slate-400 dark:text-slate-400 max-w-[280px] leading-relaxed">
                Capturing transformative stories under strict brand guidelines for WaterAid & international partners.
              </span>
              
              {/* Creative watermark */}
              <div className="mt-6 flex space-x-3 items-center bg-slate-900/70 dark:bg-slate-950/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800/50 dark:border-slate-800/50">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                <span className="font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  EST. 2022 / BANGLADESH
                </span>
              </div>
            </div>

            {/* Bottom Status Grid */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 z-10">
              <div>
                <span className="block font-mono text-[9px] text-slate-500 dark:text-slate-500 leading-none">FRAME RATE</span>
                <span className="font-mono text-xs font-semibold text-slate-200 dark:text-slate-200">24 FPS</span>
              </div>
              <div className="text-center">
                <span className="block font-mono text-[9px] text-slate-500 dark:text-slate-500 leading-none">RESOLUTION</span>
                <span className="font-mono text-xs font-semibold text-slate-200 dark:text-slate-200">4K DCI</span>
              </div>
              <div className="text-right">
                <span className="block font-mono text-[9px] text-slate-500 dark:text-slate-500 leading-none">SHUTTER</span>
                <span className="font-mono text-xs font-semibold text-slate-200 dark:text-slate-200">180°</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
          Explore
        </span>
        <button
          onClick={() => onNavClick('about')}
          className="flex items-center justify-center w-8 h-12 rounded-full border-2 border-slate-300 dark:border-slate-800 p-1 cursor-pointer hover:border-teal-500 dark:hover:border-teal-400 transition-colors"
          id="scroll-explore"
          aria-label="Scroll to About"
        >
          <motion.div
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400"
          />
        </button>
      </div>
    </section>
  );
}
