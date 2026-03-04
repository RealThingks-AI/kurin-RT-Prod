import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { clients } from "@/data/clients";

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];
  const reversedDuplicated = [...[...clients].reverse(), ...[...clients].reverse()];

  return (
    <section id="clients" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Our Prestigious Clients
          </span>
          <h2 className="heading-lg text-primary mb-6">
            Trusted by <span className="text-accent">Industry Leaders</span>
          </h2>
          <p className="text-body">
            Kurin Hygienic's satisfied clients include many institutions and businesses in your community.
          </p>
        </motion.div>

        {/* Auto-scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* First Row */}
          <div className="flex mb-6 animate-scroll-left hover:[animation-play-state:paused]">
            {duplicatedClients.map((client, index) => (
              <div key={`row1-${client.name}-${index}`} onClick={() => setSelectedClient(client)} className="flex-shrink-0 mx-2 md:mx-3 bg-white rounded-xl border border-border p-3 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer">
                <img src={client.logo} alt={client.name} className="h-10 md:h-16 w-auto min-w-[80px] md:min-w-[100px] max-w-[120px] md:max-w-[150px] object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>

          {/* Second Row - Fixed: duplicated for seamless infinite scroll */}
          <div className="flex animate-scroll-right hover:[animation-play-state:paused]">
            {reversedDuplicated.map((client, index) => (
              <div key={`row2-${client.name}-${index}`} onClick={() => setSelectedClient(client)} className="flex-shrink-0 mx-2 md:mx-3 bg-white rounded-xl border border-border p-3 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer">
                <img src={client.logo} alt={client.name} className="h-10 md:h-16 w-auto min-w-[80px] md:min-w-[100px] max-w-[120px] md:max-w-[150px] object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client Dialog */}
        <Dialog open={selectedClient !== null} onOpenChange={() => setSelectedClient(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex flex-col items-center gap-4 mb-2">
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  {selectedClient && <img src={selectedClient.logo} alt={selectedClient.name} className="h-16 w-auto max-w-[180px] object-contain" />}
                </div>
                <div className="text-center">
                  <DialogTitle className="text-xl font-display mb-1">{selectedClient?.name}</DialogTitle>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">{selectedClient?.industry}</span>
                </div>
              </div>
              <DialogDescription className="text-base leading-relaxed pt-2 text-center">{selectedClient?.description}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Trust Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }} className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/5 rounded-full border border-accent/10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-xs font-bold text-accent">{i}</div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground"><span className="font-semibold text-primary">50+</span> satisfied clients across industries</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
