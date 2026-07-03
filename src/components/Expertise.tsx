/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Layers, Camera, Film, Sparkles, ArrowRight } from 'lucide-react';
import { EXPERTISE_PILLARS } from '../data';
import { SectionId } from '../types';
import AnimatedSection from './AnimatedSection';

interface ExpertiseProps {
  onNavClick: (section: SectionId) => void;
}

export default function Expertise({ onNavClick }: ExpertiseProps) {
  // Map string names to actual Lucide component icons
  const renderIcon = (iconName: string) => {
    const iconClass = "w-7 h-7 text-teal-600 dark:text-teal-400";
    switch (iconName) {
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'Camera':
        return <Camera className={iconClass} />;
      case 'TvPlay':
        return <Film className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      default:
        return <Layers className={iconClass} />;
    }
  };

  // Resolve which navigation section each pillar triggers
  const getPillarSectionTarget = (pillarId: string): SectionId => {
    switch (pillarId) {
      case 'branding':
        return 'design';
      case 'photography':
        return 'photography';
      case 'cinematography':
        return 'contents';
      case 'content':
        return 'contents';
      default:
        return 'design';
    }
  };

  // Animation variants for children cards
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="expertise"
      className="py-24 bg-[#0B111E] dark:bg-[#030712] transition-colors duration-300 relative"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16" id="expertise-header">
          <span className="font-mono text-xs text-teal-600 dark:text-teal-400 tracking-widest uppercase font-bold mb-3 block">
            Positioning & Capabilities
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-white mb-4">
            Four Pillars of Communications Expertise
          </h2>
          <div className="h-1 w-12 bg-teal-500 rounded-full mx-auto" />
        </AnimatedSection>

        {/* 4-Pillar Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          id="expertise-grid"
        >
          {EXPERTISE_PILLARS.map((pillar) => {
            const targetSection = getPillarSectionTarget(pillar.id);
            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-8 rounded-2xl bg-[#131C2E] dark:bg-slate-900/60 border border-slate-800/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:shadow-teal-500/[0.03] transition-all duration-300 flex flex-col justify-between"
                id={`expertise-card-${pillar.id}`}
              >
                {/* Backlighting effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.01] to-blue-500/[0.01] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    {renderIcon(pillar.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-slate-100 dark:text-white mb-3">
                    {pillar.title}
                  </h3>

                  {/* Descriptions */}
                  <p className="text-sm text-slate-300 dark:text-slate-300 leading-relaxed font-light mb-4">
                    {pillar.description}
                  </p>
                  
                  <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed font-light mb-6 border-t border-slate-800 dark:border-slate-800/80 pt-4 hidden group-hover:block animate-fade-in">
                    {pillar.longDescription}
                  </p>
                </div>

                {/* Learn More Link */}
                <button
                  onClick={() => onNavClick(targetSection)}
                  className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 cursor-pointer pt-4 mt-auto group/btn"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
