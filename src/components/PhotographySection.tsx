/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Camera, Sparkles, HeartHandshake } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function PhotographySection() {
  // Skeleton count
  const skeletons = [1, 2, 3];

  return (
    <section
      id="photography"
      className="py-24 bg-[#0F172A] dark:bg-[#070B14] transition-colors duration-300 relative border-t border-slate-800/80 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Conceptual explanation and status */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <span className="font-mono text-xs text-teal-600 dark:text-teal-400 tracking-widest uppercase font-bold mb-1.5 block">
              Ethical Photography
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-white leading-tight">
              Dignified Grassroots Documentation
            </h2>
            
            <p className="text-sm md:text-base text-slate-300 dark:text-slate-400 leading-relaxed font-light">
              Field photography from grassroots documentation work — capturing clean water infrastructure, adolescent hygiene groups, and community climate resilience under strict consent guidelines and international development communication safeguards.
            </p>

            <div className="p-5 rounded-xl bg-[#131C2E] dark:bg-slate-950 border border-slate-800 dark:border-slate-800/80 flex items-start space-x-3">
              <HeartHandshake className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 dark:text-slate-400 leading-relaxed font-light">
                <strong>Safeguarding & Consent:</strong> Every visual record is collected with informed, written consent, respecting the dignity, agency, and privacy of local communities.
              </p>
            </div>

            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
              <Camera size={14} className="animate-pulse" />
              <span>GALLERY ARCHIVE LAUNCHING SOON</span>
            </div>
          </div>

          {/* Right Column: Stunning, clean shimmer placeholder grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6" id="photography-shimmer-grid">
            {skeletons.map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative aspect-[3/4] bg-[#131C2E] dark:bg-slate-950 border border-dashed border-slate-800 dark:border-slate-800 rounded-xl flex flex-col justify-between p-5 overflow-hidden group"
              >
                {/* Horizontal scanning shimmer animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800 dark:via-slate-900 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div className="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center text-slate-450 dark:text-slate-500">
                  <Camera size={14} />
                </div>

                <div className="space-y-2 mt-auto">
                  <div className="h-3 bg-slate-800 dark:bg-slate-900 rounded-md w-2/3 animate-pulse" />
                  <div className="h-2.5 bg-slate-850 dark:bg-slate-900 rounded-md w-1/2 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
