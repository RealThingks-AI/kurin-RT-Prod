import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Handshake, Target } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "National Perspective That Delivers",
    description:
      "Our global reach and local expertise deliver unmatched perspective with detailed insight into local markets.",
  },
  {
    icon: Users,
    title: "Having All The Talent In The Country",
    description:
      "Our extensive network ensures access to the best talent across the nation for your workforce needs.",
  },
  {
    icon: Handshake,
    title: "Building Collaborative Partnerships",
    description:
      "We design customized solutions based on your business and talent-related needs to deliver results.",
  },
  {
    icon: Target,
    title: "Client Satisfaction Is Our Priority",
    description:
      "We provide suited candidates in any field while maintaining respectful relationships with clients.",
  },
];



const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="why-us" className="py-16 bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-3 py-1.5 mb-3 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Your Trusted <span className="text-accent">Workforce Partner</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            We help employers identify the right candidates and provide job security.
          </p>
        </motion.div>

        {/* Features Grid - More Compact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl border border-border p-3 md:p-5 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="p-2 md:p-3 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300 w-fit mb-2 md:mb-3">
                <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-primary mb-1 md:mb-2 text-xs md:text-sm leading-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-[10px] md:text-xs leading-relaxed hidden md:block">
                {feature.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/30 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
