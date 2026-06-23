import { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

const AnimatedCounter = ({ end, suffix = '', label, duration = 2, delay = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ textAlign: 'center' }}
    >
      <div style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Outfit, sans-serif', color: 'var(--color-sandstone)', marginBottom: '8px' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500, lineHeight: 1.4 }}>
        {label}
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;
