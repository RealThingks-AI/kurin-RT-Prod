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
  HardHat,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Users,
    title: "Staff & Payroll Outsourcing",
    description:
      "Outsourcing is changing business worldwide. We take the most time-consuming financial functions off your hands and handle them faster, more accurately and at lower cost than you can in-house.",
    features: ["Recruitment & Onboarding", "Payroll Management", "Compliance Handling", "HR Administration"],
  },
  {
    icon: HardHat,
    title: "Labour Supply",
    description:
      "Reliable and skilled labour workforce for construction, manufacturing, and industrial projects. Trained workers available on-demand for short and long-term requirements.",
    features: ["Skilled Workers", "Semi-skilled Labour", "Helper Staff", "On-demand Availability"],
  },
  {
    icon: Building2,
    title: "Corporate Housekeeping",
    description:
      "We provide housekeeping services for corporate office, office campus, hospitals, multiplexes, shopping malls. Our trained personnel consistently work towards exceeding client needs.",
    features: [
      "Dusting of windowsills & ledges",
      "Removing cobwebs",
      "Vacuuming furniture",
      "Cleaning telephones & intercoms",
    ],
  },
  {
    icon: Sparkles,
    title: "Washroom Hygiene Management",
    description:
      "Complete washroom care including cleaning, sanitizing and deodorizing. We clean vanities, sinks, mirrors, showers, bathtubs, floors and tile walls at required intervals.",
    features: [
      "Sanitize & Deodorize",
      "Vanities & Sinks Cleaning",
      "Mirror Cleaning",
      "Floor & Tile Walls Washing",
    ],
  },
  {
    icon: Building2,
    title: "Floor Care Services",
    description:
      "Shopping malls, multiplexes and big retail outlets - we handle crubbing, polishing and cleaning schedule with professional manner. Trained staff and personal supervision on day to day basis.",
    features: [
      "Wet & Dry Mopping",
      "High Pressure Jet Machine",
      "Carpet Vacuuming",
      "Road Sweeping & Garbage Clearing",
    ],
  },
  {
    icon: Wrench,
    title: "MEP & Technical Services",
    description:
      "Complete MEP support including mechanical, electrical, and plumbing systems. Also covers painting, carpentry, civil work, pest control, and AC maintenance.",
    features: ["Electrical & Plumbing", "AC Maintenance", "Painting & Carpentry", "Pest Control"],
  },
  {
    icon: ShieldCheck,
    title: "Professional Security Services",
    description:
      "Trained and verified security personnel for all environments. Services include bouncers, personal security officers (PSO), residential, and commercial security.",
    features: ["Corporate Security", "Residential Guards", "Bouncer Services", "Personal Security Officers"],
  },
  {
    icon: Coffee,
    title: "Pantry & Cafeteria Services",
    description:
      "Professional pantry boys and cafeteria staff to manage your office refreshments and food services. Trained personnel ensuring hygiene and prompt service.",
    features: ["Pantry Management", "Tea/Coffee Service", "Cafeteria Staff", "Event Catering Support"],
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
              <h3 className="heading-md text-primary mb-3 text-xl">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-block px-2 py-1 text-xs rounded-full bg-accent/10 text-accent"
                  >
                    {feature}
                  </span>
                ))}
              </div>

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
