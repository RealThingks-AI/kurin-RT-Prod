import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "@/data/contact";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#process", label: "The Process" },
  { href: "#industries", label: "Industries" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Skip to content link */}
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-lg focus:text-sm focus:font-medium">
        Skip to content
      </a>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50"
            : "bg-gradient-to-b from-black/20 to-transparent backdrop-blur-[2px]"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            <motion.a href="#home" className="flex items-center relative z-10" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <img src={logo} alt="Kurin Hygienic" className="h-12 md:h-14 w-auto drop-shadow-md" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    activeSection === link.href.substring(1)
                      ? isScrolled ? "text-accent" : "text-white"
                      : isScrolled ? "text-foreground/80 hover:text-accent hover:bg-accent/5" : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  <motion.span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${activeSection === link.href.substring(1) ? "w-6" : "w-0 group-hover:w-4"}`} layoutId="activeNav" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${CONTACT.primaryPhone}`} className="flex items-center gap-2">
                <Button variant={isScrolled ? "accent" : "glass"} size="lg" className="gap-2 font-semibold">
                  <Phone className="w-4 h-4" /> Call Now
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`lg:hidden p-2.5 rounded-xl transition-colors ${isScrolled ? "hover:bg-accent/10" : "hover:bg-white/10"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-primary/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-xs bg-background shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-end p-4 border-b border-border">
                <motion.button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="p-2 rounded-xl hover:bg-accent/10 transition-colors" whileTap={{ scale: 0.95 }}>
                  <X className="w-5 h-5 text-foreground" />
                </motion.button>
              </div>

              <nav className="flex-1 py-4 overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.03 + 0.1, duration: 0.2 }}
                    className={`flex items-center gap-3 px-5 py-3.5 text-base font-medium transition-all ${activeSection === link.href.substring(1) ? "text-accent bg-accent/10 border-r-4 border-accent" : "text-foreground hover:text-accent hover:bg-accent/5"}`}
                  >
                    <span className={`w-2 h-2 rounded-full transition-colors ${activeSection === link.href.substring(1) ? "bg-accent" : "bg-border"}`} />
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-6 border-t border-border bg-muted/50">
                <a href={`tel:${CONTACT.primaryPhone}`} className="block">
                  <Button variant="accent" size="lg" className="w-full gap-2 font-semibold">
                    <Phone className="w-5 h-5" /> Call Now
                  </Button>
                </a>
                <p className="text-center text-xs text-muted-foreground mt-3">Available 24/7 for your queries</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
