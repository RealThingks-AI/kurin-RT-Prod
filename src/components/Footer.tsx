import { Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <span className="text-2xl font-display font-bold text-primary-foreground">
              Kurin<span className="text-accent">Hygienic</span>
            </span>
            <p className="text-primary-foreground/60 text-sm mt-2">
              All Manpower Solutions
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
