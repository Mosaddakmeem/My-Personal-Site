/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  id,
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion || direction === 'none') return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { x: 0, y: 30 };
      case 'down':
        return { x: 0, y: -30 };
      case 'left':
        return { x: 30, y: 0 };
      case 'right':
        return { x: -30, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1], // Custom elegant easeOutExpo curve
      },
    },
  };

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
