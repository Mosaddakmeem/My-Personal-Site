/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Download, Briefcase, Quote, CheckCircle2, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import AnimatedSection from './AnimatedSection';
import ProfessionalTimeline from './ProfessionalTimeline';

export default function About() {
  const counterRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(counterRef, { once: true, margin: '-20%' });
  const [count, setCount] = useState(0);

  // Simple count-up effect
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = PERSONAL_INFO.bio.differentiator.count;
      if (start === end) return;

      const totalDuration = 1500; // ms
      const incrementTime = Math.floor(totalDuration / end);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section
      id="about"
      className="py-24 bg-[#0F172A] dark:bg-[#070B14] transition-colors duration-300 relative border-t border-slate-800/80 dark:border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Debate Championship Callout, Quote, Toolkit */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* Personality Hook: Debate Championship Card */}
            <AnimatedSection direction="left" id="about-differentiator-card">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/20 dark:border-teal-400/10 overflow-hidden shadow-xl shadow-teal-500/[0.02]">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-teal-500/5 dark:text-teal-400/5">
                  <Award size={200} />
                </div>

                <div className="flex items-start space-x-4 relative z-10">
                  <div className="p-3 bg-teal-500/20 rounded-xl text-teal-400 dark:text-teal-400">
                    <Award size={24} />
                  </div>
                  <div>
                    <span
                      ref={counterRef}
                      className="block font-display text-5xl md:text-6xl font-black text-teal-400 dark:text-teal-400 tracking-tight leading-none mb-2"
                      id="debate-counter"
                    >
                      {count}+
                    </span>
                    <h3 className="font-display font-bold text-lg text-slate-100 dark:text-slate-100 mb-3 leading-tight">
                      {PERSONAL_INFO.bio.differentiator.title}
                    </h3>
                    <p className="font-mono text-[11px] text-teal-400 dark:text-teal-400 uppercase tracking-widest font-semibold mb-4 block">
                      The Analytical Edge
                    </p>
                    <p className="text-xs md:text-sm text-slate-300 dark:text-slate-300 leading-relaxed font-light">
                      {PERSONAL_INFO.bio.differentiator.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Philosophy Pull-Quote */}
            <AnimatedSection direction="left" delay={0.1} id="about-quote">
              <div className="p-8 rounded-2xl bg-[#131C2E] dark:bg-slate-950 border border-slate-800 dark:border-slate-800/80 relative shadow-md">
                <Quote size={32} className="text-teal-500/20 dark:text-teal-400/20 absolute top-6 left-6" />
                <blockquote className="relative z-10 pl-4 border-l-2 border-teal-500">
                  <p className="text-sm md:text-base text-slate-300 dark:text-slate-300 leading-relaxed italic font-light">
                    "{PERSONAL_INFO.bio.philosophy}"
                  </p>
                </blockquote>
              </div>
            </AnimatedSection>

            {/* Subtle Toolkit strip */}
            <AnimatedSection direction="left" delay={0.2} id="about-toolkit">
              <div className="p-6">
                <span className="block font-mono text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold mb-4">
                  Professional Toolkit
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {PERSONAL_INFO.toolkit.map((tool) => (
                    <span
                      key={tool.name}
                      className="px-3.5 py-1.5 rounded-md font-mono text-[11px] font-medium bg-[#131C2E] dark:bg-slate-950 text-slate-300 dark:text-slate-300 border border-slate-800 dark:border-slate-800/80 hover:border-teal-500/40 transition-colors duration-200"
                      title={tool.category}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Detailed Bio & Role Milestones */}
          <div className="lg:col-span-7 flex flex-col space-y-8 lg:pl-6">
            <AnimatedSection direction="right" id="about-text-content">
              <div className="flex flex-col space-y-6">
                <span className="font-mono text-xs text-teal-400 dark:text-teal-400 tracking-widest uppercase font-bold">
                  About Me
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white dark:text-white leading-tight">
                  Translating complex developmental data into human narratives.
                </h2>
                <p className="text-base md:text-lg text-slate-300 dark:text-slate-300 leading-relaxed font-light">
                  I am a dedicated Communications Specialist with a profound interest in visual storytelling. Over the past three years in the international development sector, I have honed the craft of restructuring technical frameworks and empirical data into evocative, accessible visual structures that engage stakeholders and empower local advocates.
                </p>
              </div>
            </AnimatedSection>

            {/* Current Role at Center for Peace and Justice, BRAC University */}
            <AnimatedSection direction="right" delay={0.1} id="about-current-role">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#131C2E] to-[#131C2E]/50 dark:from-[#0E1524] dark:to-[#0A0E1A] border border-slate-800 dark:border-slate-850 shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-colors duration-500" />
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 bg-teal-500/10 dark:bg-teal-500/5 rounded-lg text-teal-400 dark:text-teal-400">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-teal-400 dark:text-teal-400 font-bold uppercase tracking-wider">
                      Current Position
                    </span>
                    <h3 className="font-display font-bold text-lg text-white dark:text-white">
                      {PERSONAL_INFO.currentRole.role} at {PERSONAL_INFO.currentRole.organization}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {PERSONAL_INFO.currentRole.milestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 size={16} className="text-teal-400 dark:text-teal-400 shrink-0 mt-1" />
                      <p className="text-sm text-slate-300 dark:text-slate-300 leading-relaxed font-light">
                        {milestone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* CV Download CTA */}
            <AnimatedSection direction="right" delay={0.2} id="about-cv-download">
              <div className="flex items-center">
                <a
                  href={PERSONAL_INFO.cvUrl}
                  download="Mosaddak_Bin_Shorif_CV.pdf"
                  className="inline-flex items-center space-x-3 bg-slate-800 hover:bg-teal-700 dark:bg-white dark:hover:bg-teal-400 text-white dark:text-slate-950 font-display text-sm font-semibold uppercase tracking-wider px-6 py-4 rounded-lg transition-all shadow-md hover:shadow-lg shadow-slate-950/10 dark:shadow-white/5 cursor-pointer"
                  id="cv-download-button"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Mosaddak Bin Shorif's CV download will trigger here (/assets/Mosaddak_Bin_Shorif_CV.pdf in production).");
                  }}
                >
                  <Download size={16} />
                  <span>Download Curriculum Vitae</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Professional Journey & Timeline */}
        <ProfessionalTimeline />
      </div>
    </section>
  );
}

