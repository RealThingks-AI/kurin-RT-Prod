import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Users,
  Zap,
  Shield,
  Heart,
  Target,
  Eye,
  Rocket,
  Award,
} from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Users, label: "Collaboration", description: "Working together for success" },
  { icon: Zap, label: "Empowerment", description: "Enabling growth at every level" },
  { icon: Shield, label: "Integrity", description: "Honest and transparent dealings" },
  { icon: Heart, label: "Respect", description: "Valuing every individual" },
  { icon: Target, label: "Responsibility", description: "Accountable for our actions" },
];

// Animated counter component
const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(easeOut * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 7, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Staff Deployed" },
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 14, suffix: "+", label: "Industries Served" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-subtle" ref={ref}>
      <div className="section-container">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center mb-12 md:mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-light/10 rounded-2xl -z-10" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <motion.img
                src={aboutTeam}
                alt="Kurin Hygienic Professional Team"
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                whileHover={{ scale: 1.02 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">ISO 9001:2015 Certified</div>
                    <div className="text-xs text-muted-foreground">Quality Management System</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-gradient-to-br from-accent to-purple-dark text-white px-4 py-3 md:px-8 md:py-6 rounded-xl md:rounded-2xl shadow-glow-lg"
            >
              <div className="text-2xl md:text-4xl font-bold font-display">2018</div>
              <div className="text-xs md:text-sm opacity-90">Established</div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-semibold rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              <Users className="w-4 h-4" />
              About Us
            </motion.span>
            
            <h2 className="heading-lg text-primary mb-6">
              Your Trusted Partner in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-dark">
                Workforce Solutions
              </span>
            </h2>
            
            <p className="text-body mb-5">
              Established in 2018, Kurin Hygienic delivers single-window solutions
              for all workforce and facility challenges. The company has grown into
              a professional organization with well-planned strategies, trained
              supervisory staff, and a strong technology foundation.
            </p>
            
            <p className="text-body mb-8">
              Thousands of staff from all locations are working satisfactorily and
              comfortably growing with Kurin Hygienic. Our single window goal is to
              provide solutions for all work troubles with latest technology,
              machineries, and trained operators.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent/10 to-purple-light/10 group-hover:from-accent/20 group-hover:to-purple-light/20 transition-colors">
                    <Eye className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-primary">
                    Our Vision
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To fulfill manpower needs by offering the right people for the
                  right jobs, creating career growth opportunities nationwide.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-navy-light/10 group-hover:from-primary/20 group-hover:to-navy-light/20 transition-colors">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-primary">
                    Our Mission
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To provide innovative workforce solutions, connecting human
                  potential to the power of business.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-br from-accent to-purple-dark mb-1 md:mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="heading-md text-primary mb-10">
            Our <span className="text-accent">Core Values</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 cursor-default"
              >
                <div className="relative mx-auto mb-3 md:mb-4">
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/10 to-purple-light/10 w-fit mx-auto group-hover:from-accent/20 group-hover:to-purple-light/20 transition-all duration-300">
                    <value.icon className="w-5 h-5 md:w-7 md:h-7 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </div>
                <h4 className="font-display font-bold text-primary text-sm md:text-base mb-1 group-hover:text-accent transition-colors">
                  {value.label}
                </h4>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;