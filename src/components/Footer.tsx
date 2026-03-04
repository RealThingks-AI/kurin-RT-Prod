import { Phone, Facebook, Instagram, Twitter, Youtube, MapPin, Mail, ArrowUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { CONTACT } from "@/data/contact";

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: CONTACT.social.facebook },
  { name: "Instagram", icon: Instagram, url: CONTACT.social.instagram },
  { name: "Twitter", icon: Twitter, url: CONTACT.social.twitter },
  { name: "YouTube", icon: Youtube, url: CONTACT.social.youtube },
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
    <footer className="relative bg-[#0f172a] pt-16 pb-8" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-purple-dark to-accent" />

      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12"
        >
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <img src={logo} alt="Kurin Hygienic" className="h-12 md:h-14 w-auto mb-4" />
            <p className="text-white/60 text-sm mb-5 leading-relaxed max-w-xs">Providing comprehensive manpower and facility management solutions since 2018.</p>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${social.name}`} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }} whileHover={{ y: -3, scale: 1.1 }} className="p-2.5 rounded-xl bg-white/10 hover:bg-accent hover:shadow-glow transition-all duration-300 group">
                  <social.icon className="w-4 h-4 text-white/70 group-hover:text-accent-foreground transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-white font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-accent text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="text-white font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed flex-1 min-w-0">{CONTACT.address.short}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`tel:${CONTACT.primaryPhone}`} className="text-white/60 hover:text-accent text-sm transition-colors flex-1 min-w-0">{CONTACT.phones[0].display}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-white/60 hover:text-accent text-sm transition-colors flex-1 min-w-0 break-all">{CONTACT.email}</a>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            <h4 className="text-white font-display font-semibold mb-4">Get a Quote</h4>
            <p className="text-white/60 text-sm mb-4 max-w-xs">Need manpower solutions? Contact us for a free consultation.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium text-sm hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300">Get Started</a>
          </motion.div>
        </motion.div>

        <div className="border-t border-white/10 pt-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="text-center md:text-left">
            <p className="text-white/50 text-sm">© {currentYear} Kurin Hygienic. All rights reserved.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="flex items-center gap-6 text-sm">
            <Link to="/privacy-policy" className="text-white/50 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/50 hover:text-accent transition-colors">Terms & Conditions</Link>
          </motion.div>
        </div>
      </div>

      {/* Back to Top - Fixed position for mobile */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.7 }}
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="absolute right-4 md:right-6 -top-5 md:-top-6 p-2.5 md:p-3 bg-accent text-accent-foreground rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
