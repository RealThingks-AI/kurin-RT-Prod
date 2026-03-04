import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import logo from '@/assets/logo.png';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  minDuration?: number;
}

const LoadingScreen = ({ onLoadingComplete, minDuration = 2000 }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  // Pre-compute particle positions to avoid using window in render
  const particles = useMemo(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
    const h = typeof window !== 'undefined' ? window.innerHeight : 768;
    return Array.from({ length: 10 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const elapsed = Date.now() - startTime;
        const targetProgress = Math.min((elapsed / minDuration) * 100, 100);
        return Math.min(prev + 5, targetProgress);
      });
    }, 50);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 400);
    }, minDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [minDuration, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, hsl(230, 55%, 12%) 0%, hsl(230, 45%, 18%) 50%, hsl(265, 50%, 25%) 100%)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Particles - using pre-computed positions */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent/20 rounded-full"
                initial={{ x: p.x, y: p.y, scale: 0 }}
                animate={{ y: [null, -100], scale: [0, 1, 0], opacity: [0, 0.8, 0] }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeOut' }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center">
            <motion.div className="relative mb-8" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <motion.div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.div className="absolute -inset-4 border-2 border-accent/30 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
              <motion.div className="absolute -inset-8 border border-accent/20 rounded-full" animate={{ rotate: -360 }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} />
              <motion.img src={logo} alt="Kurin Hygienic" className="relative w-24 h-24 md:w-32 md:h-32 object-contain z-10" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
            </motion.div>

            <motion.h1 className="text-2xl md:text-3xl font-bold text-white mb-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
              <span className="text-accent">Kurin</span> Hygienic
            </motion.h1>
            <motion.p className="text-white/60 text-sm mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>Premium Facility Management</motion.p>
            <motion.div className="w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden" initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.6, duration: 0.4 }}>
              <motion.div className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
            </motion.div>
            <motion.div className="mt-4 flex items-center gap-2 text-white/50 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <span>Loading</span>
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>...</motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
