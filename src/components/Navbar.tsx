/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Send } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onNavClick: (section: SectionId) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
    }
    return true; // Default to dark mode
  });

  // Nav items configuration
  const navItems: { label: string; id: SectionId }[] = [
    { label: 'About', id: 'about' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Design Work', id: 'design' },
    { label: 'Multimedia & Social', id: 'contents' },
    { label: 'Photography', id: 'photography' },
  ];

  // Monitor scroll for solidifying header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync dark mode class on load
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    localStorage.setItem('theme', nextMode ? 'dark' : 'light');
  };

  const handleLinkClick = (id: SectionId) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  // Stagger variants for mobile links
  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.3, 0, 0.2, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.3, 0, 0.2, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <motion.nav
        id="navbar-mbs"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#0B111E]/85 dark:bg-slate-950/85 backdrop-blur-md shadow-sm border-b border-slate-800/50 dark:border-slate-800/50'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3 group text-left cursor-pointer"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-600 dark:bg-teal-500 flex items-center justify-center font-display font-bold text-white text-lg tracking-wider shadow-md shadow-teal-500/10 group-hover:scale-105 transition-transform duration-300">
              MBS
            </div>
            <div>
              <span className="block font-display font-bold text-slate-100 dark:text-white tracking-tight text-sm leading-none">
                Mosaddak Shorif
              </span>
              <span className="block font-mono text-[10px] text-teal-600 dark:text-teal-400 font-medium tracking-widest uppercase mt-1 leading-none">
                Storyteller
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-4 py-2 font-display text-sm font-medium tracking-tight rounded-md transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? 'text-teal-600 dark:text-teal-400'
                      : 'text-slate-300 dark:text-slate-300 hover:text-white dark:hover:text-white'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal-500 dark:bg-teal-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons: Mode, Contact, and Hamburger */}
          <div className="flex items-center space-x-3">
            {/* Dark/Light Mode Switch */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-slate-800 dark:border-slate-800 text-slate-300 dark:text-slate-300 hover:bg-[#131C2E] dark:hover:bg-slate-900 transition-colors duration-200 cursor-pointer"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              id="theme-toggle"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop Let's Connect CTA */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden md:flex items-center space-x-2 bg-slate-800 hover:bg-teal-700 dark:bg-white dark:hover:bg-teal-400 text-white dark:text-slate-950 font-display text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer"
              id="nav-connect-cta"
            >
              <span>Let's Connect</span>
              <Send size={12} />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-300 dark:text-slate-300 hover:bg-[#131C2E] dark:hover:bg-slate-900 transition-colors cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-[#0B111E] dark:bg-slate-950 flex flex-col justify-center px-8 md:px-16"
            id="mobile-menu-overlay"
          >
            {/* Backgrid decorative element */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="flex flex-col space-y-6 md:space-y-8 max-w-lg mx-auto w-full z-10">
              <span className="font-mono text-xs text-teal-600 dark:text-teal-400 tracking-widest uppercase">
                Navigation Menu
              </span>

              <div className="flex flex-col space-y-4 md:space-y-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    variants={linkVariants}
                    onClick={() => handleLinkClick(item.id)}
                    className="text-left font-display text-3xl md:text-5xl font-bold tracking-tight text-slate-100 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 cursor-pointer"
                    id={`mobile-nav-link-${item.id}`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <motion.div variants={linkVariants} className="pt-6 border-t border-slate-805 dark:border-slate-800 flex flex-col space-y-4">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white font-display text-sm font-semibold uppercase tracking-wider py-4 rounded-md transition-all duration-300 cursor-pointer"
                  id="mobile-nav-connect-cta"
                >
                  <span>Let's Connect</span>
                  <Send size={14} />
                </button>
                <div className="text-center">
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    mosaddakbinshorif@gmail.com
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
