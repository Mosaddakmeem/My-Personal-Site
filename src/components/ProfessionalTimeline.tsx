/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, GraduationCap, Award, Calendar, CheckCircle2, 
  Sparkles, Users, Trophy, BookMarked, ArrowRight 
} from 'lucide-react';
import { 
  WORK_EXPERIENCES, EDUCATION_ITEMS, PROF_QUALIFICATIONS, 
  CIVIL_ENGAGEMENT, ACHIEVEMENTS 
} from '../data';

type TimelineTab = 'experience' | 'education' | 'civil-awards';

export default function ProfessionalTimeline() {
  const [activeTab, setActiveTab] = useState<TimelineTab>('experience');

  const tabs = [
    { id: 'experience', label: 'Work Experience', icon: Briefcase, count: WORK_EXPERIENCES.length },
    { id: 'education', label: 'Education & Training', icon: GraduationCap, count: EDUCATION_ITEMS.length + PROF_QUALIFICATIONS.length },
    { id: 'civil-awards', label: 'Civil & Awards', icon: Award, count: CIVIL_ENGAGEMENT.length + ACHIEVEMENTS.length }
  ] as const;

  return (
    <div className="w-full mt-16 pt-12 border-t border-slate-100 dark:border-slate-800/80">
      {/* Header and Controller Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-mono text-xs text-teal-600 dark:text-teal-400 tracking-widest uppercase font-bold block mb-2">
            Professional Chronicle
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-slate-100 dark:text-white">
            Journey & Credentials
          </h2>
        </div>

        {/* Custom Tab Selector */}
        <div className="flex p-1 bg-[#131C2E] dark:bg-slate-950 rounded-xl border border-slate-800 dark:border-slate-850 self-start md:self-center overflow-x-auto max-w-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 md:px-5 py-2.5 rounded-lg font-display text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shrink-0 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1E293B] dark:bg-slate-900 text-teal-400 dark:text-teal-400 shadow-sm'
                    : 'text-slate-400 dark:text-slate-400 hover:text-slate-100 dark:hover:text-slate-100'
                }`}
              >
                <Icon size={14} className="shrink-0 animate-pulse" style={{ animationDuration: isActive ? '3s' : '0s' }} />
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive 
                    ? 'bg-teal-500/10 text-teal-400 dark:text-teal-400' 
                    : 'bg-slate-850 dark:bg-slate-805 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area with Vertical Connector Timeline */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="min-h-[400px]"
        >
          {activeTab === 'experience' && <ExperienceTabContent />}
          {activeTab === 'education' && <EducationTabContent />}
          {activeTab === 'civil-awards' && <CivilAwardsTabContent />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// 1. EXPERIENCE TAB CONTENT
function ExperienceTabContent() {
  return (
    <div className="relative pl-6 md:pl-10 border-l-2 border-slate-200 dark:border-slate-800/80 space-y-12 max-w-4xl mx-auto py-4">
      {/* Absolute Timeline Line Gradient Accent */}
      <div className="absolute top-4 bottom-4 left-[-2px] w-[2px] bg-gradient-to-b from-teal-500 via-emerald-400 to-indigo-500 rounded-full" />

      {WORK_EXPERIENCES.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="relative group"
        >
          {/* Animated Timeline Node */}
          <div className="absolute -left-[35px] md:-left-[49px] top-2.5 w-5 h-5 rounded-full border-4 border-[#0F172A] dark:border-slate-950 bg-teal-500 group-hover:bg-indigo-500 transition-all duration-300 shadow-md shadow-teal-500/20 group-hover:scale-125 group-hover:shadow-indigo-500/30 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-[#131C2E] dark:bg-slate-900/40 border border-slate-800/60 dark:border-slate-800/50 shadow-sm hover:shadow-lg hover:border-slate-750 dark:hover:border-slate-800 transition-all duration-300 relative overflow-hidden">
            {/* Subtle Gradient Backglow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/2 rounded-full blur-2xl group-hover:bg-teal-500/5 transition-colors duration-500 pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
              <div>
                <h3 className="font-display font-bold text-base md:text-lg text-slate-100 dark:text-white group-hover:text-teal-400 dark:group-hover:text-teal-400 transition-colors duration-200">
                  {exp.role}
                </h3>
                <p className="font-sans text-sm font-semibold text-indigo-400 dark:text-indigo-400">
                  {exp.organization}
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full font-mono text-[10px] font-bold bg-teal-500/10 text-teal-400 dark:text-teal-400 self-start shrink-0">
                <Calendar size={11} className="mr-1.5 shrink-0" />
                {exp.period}
              </span>
            </div>

            <ul className="space-y-3">
              {exp.bulletPoints.map((bullet, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm text-slate-300 dark:text-slate-300 font-light leading-relaxed">
                  <CheckCircle2 size={15} className="text-teal-500 shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// 2. EDUCATION & QUALIFICATIONS TAB CONTENT
function EducationTabContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto py-4">
      {/* Education Column */}
      <div className="lg:col-span-6 space-y-6">
        <h3 className="font-display font-bold text-lg text-slate-100 dark:text-white flex items-center mb-6">
          <GraduationCap className="text-teal-500 mr-2.5 shrink-0" size={20} />
          <span>Academic Background</span>
        </h3>

        <div className="relative pl-6 border-l-2 border-teal-500/30 dark:border-teal-500/10 space-y-8">
          {EDUCATION_ITEMS.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[32px] top-1.5 w-4 h-4 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-950 group-hover:scale-125 group-hover:bg-teal-500 transition-all duration-300" />

              <div className="p-6 rounded-2xl bg-[#131C2E] dark:bg-slate-900/40 border border-slate-800/60 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h4 className="font-display font-bold text-sm md:text-base text-slate-100 dark:text-white group-hover:text-teal-400 dark:group-hover:text-teal-400 transition-colors duration-200">
                    {edu.degree}
                  </h4>
                  <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[10px] font-bold bg-teal-500/10 text-teal-400 dark:text-teal-400">
                    {edu.period}
                  </span>
                </div>
                <p className="font-sans text-xs md:text-sm text-slate-400 dark:text-slate-400 mb-3">
                  {edu.institution}
                </p>
                <div className="font-mono text-[11px] font-bold text-teal-400 dark:text-teal-400 bg-teal-500/5 px-2.5 py-1 rounded inline-block">
                  {edu.gpa}
                </div>

                {edu.bullets && edu.bullets.length > 0 && (
                  <ul className="space-y-1.5 mt-3 pt-3 border-t border-slate-800">
                    {edu.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs text-slate-300 dark:text-slate-300 font-light">
                        <Sparkles size={12} className="text-amber-500 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Qualifications Column */}
      <div className="lg:col-span-6 space-y-6">
        <h3 className="font-display font-bold text-lg text-slate-100 dark:text-white flex items-center mb-6">
          <BookMarked className="text-indigo-500 mr-2.5 shrink-0" size={20} />
          <span>Professional Qualifications</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROF_QUALIFICATIONS.map((qual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="p-5 rounded-2xl bg-[#131C2E] dark:bg-slate-900/40 border border-slate-800/60 dark:border-slate-800/50 shadow-sm flex flex-col justify-between hover:border-teal-500/30 dark:hover:border-teal-500/20 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <span className="font-mono text-[9px] font-bold text-teal-400 dark:text-teal-400 uppercase tracking-widest bg-teal-500/5 px-2.5 py-0.5 rounded block mb-3 w-max">
                  {qual.year}
                </span>
                <h4 className="font-display font-bold text-xs md:text-sm text-slate-100 dark:text-white leading-snug mb-2 group-hover:text-teal-400 dark:group-hover:text-teal-400 transition-colors duration-200">
                  {qual.title}
                </h4>
              </div>
              <p className="font-sans text-[11px] text-slate-400 dark:text-slate-400 mt-2">
                {qual.institute}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. CIVIL ENGAGEMENT & AWARDS TAB CONTENT
function CivilAwardsTabContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto py-4">
      {/* Civil Engagement */}
      <div className="lg:col-span-6 space-y-6">
        <h3 className="font-display font-bold text-lg text-slate-100 dark:text-white flex items-center mb-6">
          <Users className="text-indigo-500 mr-2.5 shrink-0" size={20} />
          <span>Network & Civil Society Engagement</span>
        </h3>

        <div className="space-y-4">
          {CIVIL_ENGAGEMENT.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-5 rounded-2xl bg-[#131C2E] dark:bg-slate-900/40 border border-slate-800/60 dark:border-slate-800/50 shadow-sm flex items-start space-x-4 hover:shadow-md hover:border-slate-700 dark:hover:border-slate-800 transition-all duration-300"
            >
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                <Users size={18} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1.5 gap-2">
                  <h4 className="font-display font-bold text-sm text-slate-100 dark:text-white leading-tight">
                    {item.role}
                  </h4>
                  <span className="shrink-0 font-mono text-[9px] text-slate-400 dark:text-slate-500 font-bold">
                    {item.period}
                  </span>
                </div>
                <p className="font-sans text-xs text-slate-400 dark:text-slate-400">
                  {item.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Column */}
      <div className="lg:col-span-6 space-y-6">
        <h3 className="font-display font-bold text-lg text-slate-100 dark:text-white flex items-center mb-6">
          <Trophy className="text-amber-500 mr-2.5 shrink-0" size={20} />
          <span>Achievements & Highlights</span>
        </h3>

        <div className="space-y-4">
          {ACHIEVEMENTS.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-[#131C2E] to-[#131C2E]/40 dark:from-slate-950 dark:to-slate-900/40 border border-slate-800/60 dark:border-slate-800/50 shadow-sm flex items-start space-x-4 hover:border-amber-500/30 dark:hover:border-amber-500/20 hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Trophy size={18} />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-slate-100 dark:text-white mb-1.5 leading-tight group-hover:text-teal-400 dark:group-hover:text-teal-400 transition-colors duration-200">
                  {ach.title}
                </h4>
                <p className="font-sans text-xs md:text-sm text-slate-300 dark:text-slate-300 leading-relaxed font-light">
                  {ach.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
