/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Eye, FileText, ArrowUpRight, BookOpen, BookMarked, Compass, Megaphone, ShieldAlert, Award } from 'lucide-react';
import { DESIGN_PROJECTS } from '../data';
import { DesignProject } from '../types';
import AnimatedSection from './AnimatedSection';

export default function BrandingSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<DesignProject | null>(null);

  // Categories extracted from projects
  const categories = ['All', 'Publications', 'Branding & Layout', 'Research Summaries', 'Campaign collateral'];

  // Filter projects dynamically
  const filteredProjects = selectedCategory === 'All'
    ? DESIGN_PROJECTS
    : DESIGN_PROJECTS.filter((p) => p.category === selectedCategory);

  // Esc key closes modal for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProjectModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Map icon name to Lucide components
  const getProjectIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className={className} />;
      case 'BookMarked':
        return <BookMarked className={className} />;
      case 'FileText':
        return <FileText className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'Megaphone':
        return <Megaphone className={className} />;
      case 'ShieldAlert':
        return <ShieldAlert className={className} />;
      case 'Award':
        return <Award className={className} />;
      default:
        return <FileText className={className} />;
    }
  };

  return (
    <section
      id="design"
      className="py-24 bg-[#0F172A] dark:bg-[#070B14] transition-colors duration-300 relative border-t border-slate-800/80 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro Grid Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-teal-600 dark:text-teal-400 tracking-widest uppercase font-bold mb-3 block">
              Case Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-white leading-tight">
              Branding & Publication Design
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm md:text-base text-slate-300 dark:text-slate-400 leading-relaxed font-light">
              Synthesizing intricate organizational data into cohesive brand narratives across print and digital platforms — from professional magazines and technical briefs to engaging multimedia content and custom graphic design built to amplify institutional visibility and advocacy.
            </p>
          </div>
        </div>

        {/* Dynamic Category Filtering Bar */}
        <AnimatedSection direction="up" className="flex flex-wrap gap-2 mb-12 border-b border-slate-800/80 dark:border-slate-800/80 pb-6" id="design-filter-bar">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/10'
                    : 'bg-[#131C2E] dark:bg-slate-950 text-slate-300 dark:text-slate-400 hover:bg-[#1E293B] dark:hover:bg-slate-850 hover:text-white dark:hover:text-white'
                }`}
                id={`filter-btn-${category.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {category}
              </button>
            );
          })}
        </AnimatedSection>

        {/* Project Showcase Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="project-showcase-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveProjectModal(project)}
                className="group cursor-pointer flex flex-col h-full bg-[#131C2E] dark:bg-slate-950 border border-slate-800/80 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                id={`project-card-${project.id}`}
              >
                {/* Mock Thumbnail Asset Cover */}
                <div className={`relative aspect-[4/3] w-full flex flex-col justify-between p-6 border-b border-slate-800 dark:border-slate-800/80 overflow-hidden ${project.thumbnailPlaceholderColor}`}>
                  {/* Subtle Grid Pattern inside the thumbnail */}
                  <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
                  
                  {/* Category Pill Tag */}
                  <div className="flex justify-between items-center z-10">
                    <span className="px-2.5 py-1 rounded-md font-mono text-[9px] font-bold uppercase tracking-wider bg-black/40 text-white backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/40 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye size={14} />
                    </span>
                  </div>

                  {/* Representative Graphic Icon */}
                  <div className="my-auto self-center flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {getProjectIcon(project.iconName, "w-8 h-8")}
                    </div>
                    <span className="font-mono text-[10px] tracking-widest font-bold opacity-70">
                      OFFICIAL COMPILATION
                    </span>
                  </div>

                  {/* Client Identifier Footer within cover */}
                  <div className="flex justify-between items-end z-10">
                    <div>
                      <span className="block font-mono text-[9px] opacity-70 leading-none">CLIENT BRAND</span>
                      <span className="font-display font-bold text-xs tracking-tight">{project.client}</span>
                    </div>
                    <ArrowUpRight size={16} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                {/* Text Content Block */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase mb-1.5 block">
                      {project.tag}
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-slate-100 dark:text-white mb-2 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 dark:text-slate-400 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Accessibility Note */}
        <div className="text-center mt-12">
          <p className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            * All publications configured strictly matching WaterAid global design standards.
          </p>
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {activeProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProjectModal(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            id="project-lightbox-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()} // Stop bubble closing modal
              className="w-full max-w-4xl bg-[#131C2E] dark:bg-slate-950 border border-slate-800 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/40 text-white hover:bg-slate-900/60 dark:hover:bg-slate-800/80 transition-colors cursor-pointer"
                aria-label="Close details modal"
                id="modal-close-btn"
              >
                <X size={18} />
              </button>

              {/* Modal Left Column: Abstract Visual Document Header */}
              <div className={`md:w-5/12 p-10 flex flex-col justify-between text-white relative ${activeProjectModal.thumbnailPlaceholderColor}`}>
                <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

                <div>
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-md font-mono text-[9px] font-bold uppercase tracking-wider">
                    {activeProjectModal.category}
                  </span>
                </div>

                <div className="my-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mx-auto mb-4">
                    {getProjectIcon(activeProjectModal.iconName, "w-10 h-10")}
                  </div>
                  <span className="font-mono text-xs tracking-widest font-bold opacity-80 block uppercase mb-1">
                    Document Metadata
                  </span>
                  <span className="font-mono text-[10px] opacity-60">Verified Institutional Report</span>
                </div>

                <div>
                  <span className="block font-mono text-[9px] opacity-70 uppercase tracking-widest leading-none">Primary Client</span>
                  <span className="font-display font-bold text-base leading-snug block mt-1">{activeProjectModal.client}</span>
                </div>
              </div>

              {/* Modal Right Column: Expanded Metadata details */}
              <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-between">
                <div className="flex flex-col space-y-6">
                  <div>
                    <span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest mb-1.5 block">
                      {activeProjectModal.tag}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-100 dark:text-white leading-tight">
                      {activeProjectModal.title}
                    </h3>
                  </div>

                  <div className="border-t border-slate-800 pt-6">
                    <h4 className="font-mono text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                      Project Objective & Scope
                    </h4>
                    <p className="text-sm md:text-base text-slate-300 dark:text-slate-300 leading-relaxed font-light">
                      {activeProjectModal.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 bg-[#0F172A] dark:bg-slate-900/50 p-4 rounded-xl border border-slate-800 dark:border-slate-800/60">
                    <div>
                      <span className="block font-mono text-[9px] text-slate-400 dark:text-slate-500 leading-none mb-1">DESIGN FOCUS</span>
                      <span className="font-display text-xs font-semibold text-slate-200 dark:text-slate-200">Typography, Grid, Layout</span>
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] text-slate-400 dark:text-slate-500 leading-none mb-1">DISTRIBUTION</span>
                      <span className="font-display text-xs font-semibold text-slate-200 dark:text-slate-200">Print & Digital Hubs</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    Branding Integrity Approved
                  </span>
                  <button
                    onClick={() => {
                      alert(`Opening placeholder interactive viewer for ${activeProjectModal.title}...`);
                      setActiveProjectModal(null);
                    }}
                    className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-teal-700 dark:bg-white dark:hover:bg-teal-400 text-white dark:text-slate-950 font-display text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-all cursor-pointer"
                  >
                    <span>Read Full Case</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
