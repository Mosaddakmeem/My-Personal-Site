/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUp, Mail, Instagram, Linkedin, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { SectionId } from '../types';

interface FooterProps {
  onNavClick: (section: SectionId) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Email', icon: <Mail size={16} />, href: `mailto:${PERSONAL_INFO.email}` },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={16} />, href: '#' },
    { name: 'Global NGO Profile', icon: <Globe size={16} />, href: '#' },
  ];

  return (
    <footer className="bg-[#0B111E] dark:bg-black text-slate-300 dark:text-slate-400 border-t border-slate-850 dark:border-slate-900 transition-colors duration-300 relative">
      {/* Decorative top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 pb-12 border-b border-slate-800 dark:border-slate-900">
          
          {/* Brand/Monogram */}
          <button
            onClick={() => onNavClick('home')}
            className="flex items-center space-x-3 text-left cursor-pointer"
            id="footer-logo"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-950 dark:bg-white flex items-center justify-center font-display font-black text-white dark:text-slate-950 text-base tracking-wider">
              MBS
            </div>
            <div>
              <span className="block font-display font-bold text-slate-100 dark:text-white text-sm leading-none">
                Mosaddak Shorif
              </span>
              <span className="block font-mono text-[9px] text-teal-600 dark:text-teal-400 tracking-widest uppercase mt-0.5 font-semibold">
                Communications Expert
              </span>
            </div>
          </button>

          {/* Quick Navigation Footer Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <button onClick={() => onNavClick('about')} className="text-xs font-mono font-medium tracking-tight text-slate-400 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 cursor-pointer transition-colors">
              About
            </button>
            <button onClick={() => onNavClick('expertise')} className="text-xs font-mono font-medium tracking-tight text-slate-400 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 cursor-pointer transition-colors">
              Expertise
            </button>
            <button onClick={() => onNavClick('design')} className="text-xs font-mono font-medium tracking-tight text-slate-400 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 cursor-pointer transition-colors">
              Design Work
            </button>
            <button onClick={() => onNavClick('contents')} className="text-xs font-mono font-medium tracking-tight text-slate-400 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 cursor-pointer transition-colors">
              Multimedia
            </button>
            <button onClick={() => onNavClick('photography')} className="text-xs font-mono font-medium tracking-tight text-slate-400 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 cursor-pointer transition-colors">
              Photography
            </button>
          </div>

          {/* Social Platforms Links */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 rounded-full border border-slate-800 dark:border-slate-800 text-slate-400 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 flex items-center justify-center hover:bg-[#131C2E] dark:hover:bg-slate-900 transition-all"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright column */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-center sm:text-left space-y-6 sm:space-y-0">
          <p className="font-mono text-[10px] text-slate-400 dark:text-slate-500">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved under local & global agency guidelines.
          </p>

          {/* Back to top button */}
          <motion.button
            whileHover={{ y: -4 }}
            onClick={handleScrollTop}
            className="flex items-center space-x-2 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 cursor-pointer"
            id="back-to-top-btn"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-[#131C2E] dark:bg-slate-900 flex items-center justify-center">
              <ArrowUp size={12} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
