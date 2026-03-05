import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { CONTACT } from "@/data/contact";

const FloatingButtons = () => {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-[5.5rem] right-4 md:bottom-[6.5rem] md:right-6 z-40 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40"
      >
        <div className="relative">
          <AnimatePresence>
            {showTooltip === "whatsapp" && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
              >
                Chat with us on WhatsApp
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="relative z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setShowTooltip("whatsapp")}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
          </a>
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 pointer-events-none" />
        </div>
      </motion.div>
    </>
  );
};

export default FloatingButtons;
