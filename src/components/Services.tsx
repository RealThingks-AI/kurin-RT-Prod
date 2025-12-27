import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Building2,
  Sparkles,
  Wrench,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Users,
    title: "Staff & Payroll Outsourcing",
    description:
      "We manage time-consuming financial and HR functions with speed and accuracy, enabling clients to focus on core business operations.",
  },
  {
    icon: Building2,
    title: "Corporate Housekeeping",
    description:
      "Comprehensive cleaning for offices, malls, and multiplexes including dusting, vacuuming, cobweb removal, and upholstery care.",
  },
  {
    icon: Sparkles,
    title: "Washroom Hygiene Management",
    description:
      "Deep cleaning and sanitization of sinks, vanities, showers, and toilets at frequent intervals to maintain the highest hygiene standards.",
  },
  {
    icon: Wrench,
    title: "Facility Management Services",
    description:
      "Complete MEP support including mechanical, electrical, plumbing systems, air-conditioning maintenance, and road sweeping.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Security Services",
    description:
      "Trained and verified security personnel ensuring safety, asset protection, and controlled environments.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(`Enquiry for ${serviceName}`);
    window.open(`https://wa.me/917038613623?text=${message}`, "_blank");
  };

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            What We Do
          </span>
          <h2 className="heading-lg text-primary mb-6">
            Comprehensive{" "}
            <span className="text-accent">Facility Solutions</span>
          </h2>
          <p className="text-body">
            From staffing to security, we provide end-to-end workforce and
            facility management services tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-card hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="p-4 rounded-xl bg-accent/10 w-fit mb-6 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="heading-md text-primary mb-4 text-xl">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <Button
                variant="outline"
                onClick={() => handleWhatsApp(service.title)}
                className="w-full group/btn hover:bg-green-500 hover:text-primary-foreground hover:border-green-500"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Book on WhatsApp
              </Button>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/30 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
