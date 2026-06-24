import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  padding?: string;
}

const GlassCard = ({ children, className = '', delay = 0, padding = '32px' }: GlassCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`solid-card ${className}`}
      style={{ padding }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
