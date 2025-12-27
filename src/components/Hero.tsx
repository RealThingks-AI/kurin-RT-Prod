import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

// Client logos
import sukhwaniConstructions from "@/assets/clients/sukhwani-constructions.png";
import privetDrive from "@/assets/clients/privet-drive.png";
import namrataGroup from "@/assets/clients/namrata-group.png";
import millenniumConstruction from "@/assets/clients/millennium-construction.png";
import sukhwaniPacific from "@/assets/clients/sukhwani-pacific.png";
import shyamaBuilders from "@/assets/clients/shyama-builders.png";
import bhandariAssociates from "@/assets/clients/bhandari-associates.png";
import rohitInfra from "@/assets/clients/rohit-infra.png";
import niramayaHospital from "@/assets/clients/niramaya-hospital.png";
import seawindDevelopers from "@/assets/clients/seawind-developers.png";
import kia from "@/assets/clients/kia.png";
import saiSagarVentures from "@/assets/clients/sai-sagar-ventures.png";
import millenniumEngineers from "@/assets/clients/millennium-engineers.png";
import koltePatil from "@/assets/clients/kolte-patil.png";
import sealtechEngineers from "@/assets/clients/sealtech-engineers.png";
import millenniumParamount from "@/assets/clients/millennium-paramount.png";
import savali from "@/assets/clients/savali.png";

const clients = [
  { name: "Sukhwani Constructions", logo: sukhwaniConstructions },
  { name: "43 Privet Drive", logo: privetDrive },
  { name: "Namrata Group", logo: namrataGroup },
  { name: "Millennium Construction", logo: millenniumConstruction },
  { name: "Sukhwani Pacific", logo: sukhwaniPacific },
  { name: "Shyama Builders", logo: shyamaBuilders },
  { name: "Bhandari Associates", logo: bhandariAssociates },
  { name: "Rohit Infra", logo: rohitInfra },
  { name: "Niramaya Hospital", logo: niramayaHospital },
  { name: "Seawind Developers", logo: seawindDevelopers },
  { name: "KIA", logo: kia },
  { name: "Sai Sagar Ventures", logo: saiSagarVentures },
  { name: "Millennium Engineers", logo: millenniumEngineers },
  { name: "Kolte-Patil", logo: koltePatil },
  { name: "Sealtech Engineers", logo: sealtechEngineers },
  { name: "Millennium Paramount", logo: millenniumParamount },
  { name: "Savali", logo: savali },
];

const Hero = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent/20 text-accent border border-accent/30">
              All Manpower Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl text-primary-foreground mb-6"
          >
            Quality Manpower{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-blue-300">
              At Your Fingertips
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Providing 24×7 quality services, 365 days a year. We connect human
            potential to the power of business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={handleScrollToContact}
              className="group min-w-[200px]"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a href="tel:7038613623">
              <Button variant="heroOutline" size="xl" className="min-w-[200px]">
                <Phone className="w-5 h-5" />
                +91 7038 613 623
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Client Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-6 border-t border-border/20">
        <div className="section-container">
          <p className="text-center text-muted-foreground text-sm mb-4 font-medium tracking-wider uppercase">
            Trusted by Industry Leaders
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 mx-3 bg-white rounded-lg shadow-sm flex items-center justify-center min-w-[140px]"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-10 w-auto max-w-[120px] object-contain hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
