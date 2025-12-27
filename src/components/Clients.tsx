import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Our Prestigious Clients
          </span>
          <h2 className="heading-lg text-primary mb-6">
            Trusted by <span className="text-accent">Industry Leaders</span>
          </h2>
          <p className="text-body">
            Kurin Hygienic's satisfied clients include many institutions and businesses in your community. 
            We take pride in building long-term relationships with our partners.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-card rounded-xl border border-border p-4 md:p-6 flex items-center justify-center hover:shadow-card hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/5 rounded-full border border-accent/10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-xs font-bold text-accent"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">50+</span> satisfied clients across industries
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
