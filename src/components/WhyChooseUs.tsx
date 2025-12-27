import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Handshake, Target } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "National Perspective That Delivers",
    description:
      "At Kurin Hygienic Group, our global reach and local expertise combine to deliver an unmatched perspective with detailed insight into local markets across all major industry sectors.",
  },
  {
    icon: Users,
    title: "Having All The Talent In The Country",
    description:
      "Whether your needs are local or global, we can create the workforce solution you need. Our extensive network ensures access to the best talent across the nation.",
  },
  {
    icon: Handshake,
    title: "Building Collaborative Partnerships",
    description:
      "We develop a keen understanding of our partner's business and talent-related needs. We design customized solutions and deliver the talent you need to win.",
  },
  {
    icon: Target,
    title: "Client Satisfaction Is Our Priority",
    description:
      "We are committed to our fundamentals and assure our clients by providing them with the suited candidate in any specific field. We maintain a mutually respectful relationship with our clients.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Why Choose Us
          </span>
          <h2 className="heading-lg text-primary mb-6">
            Your Trusted <span className="text-accent">Workforce Partner</span>
          </h2>
          <p className="text-body">
            At Kurin Hygienic Group, we help employers identify the right candidates and upgrade the future of their employees by providing them with job security.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="heading-md text-primary mb-3 text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/30 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "1000+", label: "Staff Deployed" },
            { value: "50+", label: "Happy Clients" },
            { value: "7+", label: "Years Experience" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
              className="text-center p-6 bg-accent/5 rounded-xl border border-accent/10"
            >
              <div className="text-3xl md:text-4xl font-bold font-display text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
