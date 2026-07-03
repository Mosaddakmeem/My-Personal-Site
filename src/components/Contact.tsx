/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle, MessageSquare, AlertCircle, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please populate all fields prior to sending.');
      return;
    }

    setIsSubmitting(true);

    // Simulate safe API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0B111E] dark:bg-[#030712] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-radial-gradient from-teal-500/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Contact CTA */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <span className="font-mono text-xs text-teal-600 dark:text-teal-400 tracking-widest uppercase font-bold mb-3 block">
                Get In Touch
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-white mb-6 leading-tight">
                Let's create something meaningful together.
              </h2>
              <p className="text-sm md:text-base text-slate-300 dark:text-slate-400 leading-relaxed font-light">
                Whether you have a complex development research paper needing a layout overhaul, a field documentary project, or require cohesive brand guidelines for an advocacy project, let's connect.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-xl bg-[#131C2E] dark:bg-slate-900/60 border border-slate-800/80 dark:border-slate-800/80 shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 dark:bg-teal-500/5 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Direct Email Correspondence
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-display font-bold text-base md:text-lg text-slate-100 dark:text-white hover:text-teal-400 dark:hover:text-teal-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-xl bg-[#131C2E] dark:bg-slate-900/60 border border-slate-800/80 dark:border-slate-800/80 shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 dark:bg-teal-500/5 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Mobile Contact
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="font-display font-bold text-base md:text-lg text-slate-100 dark:text-white hover:text-teal-400 dark:hover:text-teal-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Address / Location Card */}
            <div className="p-6 rounded-xl bg-[#131C2E] dark:bg-slate-900/60 border border-slate-800/80 dark:border-slate-800/80 shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 dark:bg-teal-500/5 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Base Location
                  </span>
                  <span className="font-display font-bold text-sm md:text-base text-slate-100 dark:text-white block">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Response speed badge */}
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 dark:text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Typically replies within 24 business hours</span>
            </div>
          </div>

          {/* Right Column: Contact Form / Submission State */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bg-[#131C2E] dark:bg-slate-900/60 border border-slate-800/80 dark:border-slate-800/80 rounded-2xl p-8 md:p-10 shadow-lg relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageSquare size={16} className="text-teal-500" />
                      <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
                        Secure Submission Portal
                      </span>
                    </div>

                    {formError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-2.5 text-xs text-red-600 dark:text-red-400"
                      >
                        <AlertCircle size={14} className="shrink-0" />
                        <span>{formError}</span>
                      </motion.div>
                    )}

                    {/* Name Input */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#0B111E] dark:bg-slate-950 border border-slate-800 dark:border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#0B111E] dark:bg-slate-950 border border-slate-800 dark:border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-all"
                        placeholder="Your email address"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="relative">
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#0B111E] dark:bg-slate-950 border border-slate-800 dark:border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-all resize-none"
                        placeholder="How can Mosaddak collaborate on your next campaign?"
                      />
                    </div>

                    {/* Submit CTA */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-[#1E293B] dark:bg-white dark:hover:bg-teal-450 text-white dark:text-slate-950 font-display text-xs font-semibold uppercase tracking-wider py-4 rounded-lg transition-colors cursor-pointer shadow-md"
                    >
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                      <Send size={12} />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.2 }}
                      className="w-16 h-16 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6"
                    >
                      <CheckCircle size={32} />
                    </motion.div>

                    <h3 className="font-display font-extrabold text-2xl text-slate-100 dark:text-white mb-2">
                      Transmission Successful!
                    </h3>
                    <p className="text-sm text-slate-300 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
                      Thank you for reaching out. Your message has been encrypted and securely delivered. Mosaddak will review your proposal and respond promptly.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-mono font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 underline underline-offset-4 cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
