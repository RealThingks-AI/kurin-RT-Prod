import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-primary py-12" ref={ref}>
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-2xl font-display font-bold text-primary-foreground">
              Kurin<span className="text-accent">Hygienic</span>
            </span>
            <p className="text-primary-foreground/60 text-sm mt-2">
              All Manpower Solutions
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Kurin Hygienic. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
              <Phone className="w-4 h-4 text-accent" />
              <a
                href="tel:7038613623"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                +91 7038 613 623
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
