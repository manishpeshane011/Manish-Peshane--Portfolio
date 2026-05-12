import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Container = ({ children, className = '', id }: ContainerProps) => (
  <div id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-12 ${className}`}>
    {children}
  </div>
);

export const Section = ({ children, className = '', id }: ContainerProps) => (
  <section id={id} className={`py-24 md:py-32 overflow-hidden ${className}`}>
    {children}
  </section>
);

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  key?: any;
}

export const Reveal = ({ children, width = "fit-content", delay = 0 }: RevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
