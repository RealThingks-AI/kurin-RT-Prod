import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Megaphone,
  Search,
  UserPlus,
  FileText,
  ShieldCheck,
  Phone,
  Filter,
  Video,
  Award,
  GraduationCap,
} from "lucide-react";

const steps = [
  { icon: Megaphone, title: "Advertise the Position", description: "Wide-reaching recruitment campaigns" },
  { icon: Search, title: "Identify Hiring Needs", description: "Understanding client requirements" },
  { icon: UserPlus, title: "Recruit the Position", description: "Sourcing qualified candidates" },
  { icon: FileText, title: "Review Applications", description: "Thorough application screening" },
  { icon: ShieldCheck, title: "Background Check", description: "Comprehensive verification" },
  { icon: Phone, title: "Phone Interview", description: "Initial screening calls" },
  { icon: Filter, title: "Screening & Shortlisting", description: "Selecting top candidates" },
  { icon: Video, title: "Interviews", description: "Virtual or offline interviews" },
  { icon: Award, title: "Evaluation & Offer", description: "Final assessment and offer" },
  { icon: GraduationCap, title: "Induction", description: "Onboarding new employees" },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-primary" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/20 text-accent border border-accent/30">
            Quality Assurance
          </span>
          <h2 className="heading-lg text-primary-foreground mb-6">
            Our <span className="text-accent">Recruiting & Selection Process</span>
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-4">
            Our recruitment principle mainly involves finding the right candidate with the best skills, experience, and personality to fit the job.
          </p>
          <p className="text-primary-foreground/60">
            A rigorous 10-step process ensuring you get only the best qualified and verified professionals.
          </p>
        </motion.div>

        {/* Desktop Stepper */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-primary-foreground/10">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-accent origin-left"
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step Number */}
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg mb-4 shadow-glow">
                    {index + 1}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4 border-2 border-primary-foreground/20">
                    <step.icon className="w-10 h-10 text-accent" />
                  </div>

                  {/* Text */}
                  <h3 className="font-display font-bold text-primary-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/60">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-foreground/10">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-full bg-accent origin-top"
              />
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative flex gap-6 items-start"
                >
                  {/* Step Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center border-2 border-accent">
                      <step.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-3">
                    <h3 className="font-display font-bold text-primary-foreground text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-primary-foreground/60">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
