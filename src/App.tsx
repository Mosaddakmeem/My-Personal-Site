/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import BrandingSection from './components/BrandingSection';
import ContentsSection from './components/ContentsSection';
import PhotographySection from './components/PhotographySection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SectionId } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  // Multi-route anchor navigation smooth-scroller
  const handleNavClick = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy observer to highlight links dynamically
  useEffect(() => {
    const sections: SectionId[] = ['home', 'about', 'expertise', 'design', 'contents', 'photography', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -35% 0px', // Matches the active visual middle screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B111E] dark:bg-[#030712] transition-colors duration-300 selection:bg-teal-500/30 selection:text-teal-900 dark:selection:text-teal-100">
      
      {/* Sticky Fixed Navigation */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Structural Layout Grid Container */}
      <main className="w-full">
        {/* 1. Hero / Home Landing Block */}
        <Hero onNavClick={handleNavClick} />

        {/* 2. About Me Profile Overview */}
        <About />

        {/* 3. Core Expertise 4-pillar Segment */}
        <Expertise onNavClick={handleNavClick} />

        {/* 4. Branding & Design Project Publications Showcase */}
        <BrandingSection />

        {/* 5. Multimedia Showcase: Documentaries & Social Media Grid */}
        <ContentsSection />

        {/* 6. Dignified Grassroots Photography Archive */}
        <PhotographySection />

        {/* 7. Collab Proposal & Interactive Contact */}
        <Contact />
      </main>

      {/* Structured Branding Footer */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}

