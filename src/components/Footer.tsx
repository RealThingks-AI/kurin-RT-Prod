import { Phone, Facebook, Instagram, Twitter, Youtube, MapPin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/kurin2018",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/_kurin.hygienic",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://www.twitter.com/@KurinHygienic",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@kurinpune8354",
  },
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 pt-16 pb-8" ref={ref}>
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-purple-dark to-accent" />

      <div className="section-container">
        {/* Main Footer Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-12"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <img 
              src={logo} 
              alt="Kurin Hygienic" 
              className="h-10 md:h-14 w-auto mb-3 md:mb-4"
            />
            <p className="text-primary-foreground/60 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
              Providing comprehensive manpower and facility management solutions since 2018.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-1.5 md:gap-2 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-primary-foreground/10 hover:bg-accent hover:shadow-glow transition-all duration-300 group"
                >
                  <social.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-foreground/70 group-hover:text-accent-foreground transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-primary-foreground font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/30 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-primary-foreground font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/60 text-sm leading-relaxed">
                  Office No. 06, Swami Plaza,<br />
                  Shahunagar, Chinchwad,<br />
                  Pune – 411019
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:7038613623"
                  className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                >
                  +91 7038 613 623
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:kurin.pune@gmail.com"
                  className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                >
                  kurin.pune@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter/CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-primary-foreground font-display font-semibold mb-4">Get a Quote</h4>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Need manpower solutions? Contact us for a free consultation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-xl font-medium text-sm hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Kurin Hygienic. All rights reserved.
            </p>
          </motion.div>

          {/* Legal Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-6 text-sm"
          >
            <Link
              to="/privacy-policy"
              className="text-primary-foreground/50 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-primary-foreground/50 hover:text-accent transition-colors"
            >
              Terms & Conditions
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.7 }}
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="absolute right-6 -top-6 p-3 bg-accent text-accent-foreground rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;