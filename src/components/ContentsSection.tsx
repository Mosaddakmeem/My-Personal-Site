/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Eye, Maximize2, Instagram, Film, LayoutGrid, Calendar } from 'lucide-react';
import { VIDEOS, SOCIAL_TILES } from '../data';
import { VideoItem, SocialTile } from '../types';
import AnimatedSection from './AnimatedSection';

export default function ContentsSection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activeTile, setActiveTile] = useState<SocialTile | null>(null);

  // Esc key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
        setActiveTile(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="contents"
      className="py-24 bg-[#0B111E] dark:bg-[#030712] transition-colors duration-300 relative"
    >
      {/* Grid Background overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Videos Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs text-teal-600 dark:text-teal-400 tracking-widest uppercase font-bold mb-3 block">
              Cinematography & Reels
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-white">
              Featured Video Showcase
            </h2>
          </div>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-mono mt-4 md:mt-0">
            🎬 DIRECTED • SHOT • EDITED BY MOSADDAK
          </p>
        </div>

        {/* 3 Premium Video Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {VIDEOS.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -6 }}
              className="group cursor-pointer bg-[#131C2E] dark:bg-[#090D16] border border-slate-800 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-md"
              onClick={() => setActiveVideo(video)}
              id={`video-card-${video.id}`}
            >
              {/* Theater Video Cover */}
              <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
                
                {/* Custom Gradient Cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:scale-105 transition-transform duration-500" />
                
                {/* Big central emoji indicator reflecting video context */}
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300 z-10 select-none">
                  {video.thumbnail}
                </div>

                {/* Pulsing Neon Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-14 h-14 rounded-full bg-teal-500 hover:bg-teal-400 text-white flex items-center justify-center shadow-lg shadow-teal-500/30 transform transition-transform"
                  >
                    <Play size={20} fill="white" className="ml-1" />
                  </motion.div>
                </div>

                {/* Tag pill */}
                <div className="absolute bottom-3 left-4 z-20">
                  <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-md font-mono text-[9px] font-semibold text-white tracking-wider uppercase">
                    HD Preview
                  </span>
                </div>
              </div>

              {/* Text metadata */}
              <div className="p-6">
                <span className="font-mono text-[10px] text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest block mb-1">
                  {video.campaign}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-100 dark:text-white mb-2 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-300 dark:text-slate-400 leading-relaxed font-light">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Content Grid Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-t border-slate-800 dark:border-slate-850 pt-16">
          <div>
            <span className="font-mono text-xs text-teal-600 dark:text-teal-400 tracking-widest uppercase font-bold mb-3 block">
              Digital Engagement & Motion
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-white">
              Social Media Content Campaigns
            </h2>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mt-4 md:mt-0">
            <Instagram size={14} className="text-pink-500" />
            <span>@WATERAIDBANGLADESH & CAMPAIGNS</span>
          </div>
        </div>

        {/* Dense Responsive Grid representing social design sheets */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="social-media-grid">
          {SOCIAL_TILES.map((tile) => (
            <motion.div
              key={tile.id}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setActiveTile(tile)}
              className={`group cursor-pointer rounded-xl p-6 flex flex-col justify-between aspect-square border border-slate-800 dark:border-slate-800/80 shadow-sm relative overflow-hidden ${tile.colorClass}`}
              id={`social-tile-${tile.id}`}
            >
              <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
              
              {/* Backglow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex justify-between items-start z-10">
                <span className="px-2 py-0.5 rounded-md text-[8px] font-mono font-bold uppercase bg-black/30 backdrop-blur-sm text-white border border-white/10">
                  {tile.type}
                </span>
                <span className="w-6 h-6 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye size={10} />
                </span>
              </div>

              {/* Graphical Center Element */}
              <div className="my-auto self-center select-none text-2xl filter saturate-50 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {tile.type === 'motion' ? '🎬' : tile.type === 'campaign' ? '📢' : '📱'}
              </div>

              <div className="z-10">
                <span className="block font-mono text-[8px] opacity-60 uppercase tracking-widest leading-none mb-1">CAMPAIGN POST</span>
                <h4 className="font-display font-bold text-xs leading-snug tracking-tight group-hover:text-teal-300 transition-colors">
                  {tile.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Lightbox Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            id="video-player-modal"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors cursor-pointer"
                aria-label="Close video"
                id="modal-close-video"
              >
                <X size={18} />
              </button>

              {/* Iframe wrapper */}
              <div className="aspect-video w-full bg-slate-900 flex items-center justify-center">
                {/* Note: Standard YouTube embed. In iframe sandbox environments, real playbacks may have limitations. Let's provide a real play handle or descriptive cover as fallback */}
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Footer description */}
              <div className="bg-slate-950 p-6 md:p-8 text-white border-t border-slate-900">
                <span className="font-mono text-xs text-teal-400 font-bold uppercase tracking-widest mb-1.5 block">
                  {activeVideo.campaign}
                </span>
                <h3 className="font-display font-extrabold text-xl mb-3">
                  {activeVideo.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                  {activeVideo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Media Image Lightbox Modal */}
      <AnimatePresence>
        {activeTile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveTile(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            id="social-tile-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-[#131C2E] dark:bg-slate-950 border border-slate-800 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveTile(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/40 dark:bg-slate-900 text-slate-100 dark:text-slate-300 hover:bg-slate-800 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close layout info"
                id="modal-close-tile"
              >
                <X size={18} />
              </button>

              <div className="flex flex-col space-y-6">
                {/* Large Representative Visual Frame */}
                <div className={`aspect-square w-full rounded-xl flex items-center justify-center border border-slate-800 dark:border-slate-800/80 overflow-hidden relative shadow-inner ${activeTile.colorClass}`}>
                  <div className="absolute inset-0 grid-bg opacity-15" />
                  <div className="text-6xl select-none">
                    {activeTile.type === 'motion' ? '🎬' : activeTile.type === 'campaign' ? '📢' : '📱'}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="px-2.5 py-1 bg-black/60 rounded font-mono text-[9px] tracking-widest text-white uppercase font-bold">
                      {activeTile.type} layout template
                    </span>
                  </div>
                </div>

                {/* Metadata Details */}
                <div>
                  <span className="font-mono text-[10px] text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest mb-1 block">
                    Institutional Social Hub
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-slate-100 dark:text-white leading-snug">
                    {activeTile.title}
                  </h3>
                </div>

                <div className="border-t border-slate-800 dark:border-slate-800/80 pt-4 flex flex-col space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-slate-400 dark:text-slate-400">
                    <Calendar size={14} />
                    <span>Published: WaterAid Bangladesh Campaigns</span>
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 leading-relaxed font-light">
                    Custom digital collateral created in conformity with rigorous regional branding blueprints, establishing visual continuity on official advocacy platforms.
                  </p>
                </div>

                {/* Close Button CTA */}
                <button
                  onClick={() => setActiveTile(null)}
                  className="w-full bg-slate-800 hover:bg-teal-700 dark:bg-white dark:hover:bg-teal-400 text-white dark:text-slate-950 font-display text-xs font-semibold uppercase tracking-wider py-3.5 rounded-lg transition-all cursor-pointer"
                >
                  Return to Contents Grid
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
