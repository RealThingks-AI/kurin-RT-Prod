import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Zap, Shield, Heart, Target, Eye, Rocket, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const values = [
  { icon: Users, label: "Collaboration", description: "Working together for success", details: "At Kurin Hygienic, collaboration is at the heart of everything we do. We believe that the best results come from working together—across teams, with our clients, and within the communities we serve." },
  { icon: Zap, label: "Empowerment", description: "Enabling growth at every level", details: "We empower our employees and partners to take initiative, make decisions, and grow professionally. Through continuous training, mentorship programs, and career development opportunities." },
  { icon: Shield, label: "Integrity", description: "Honest and transparent dealings", details: "Integrity is non-negotiable at Kurin Hygienic. We maintain complete transparency in all our business dealings, from contracts to communications." },
  { icon: Heart, label: "Respect", description: "Valuing every individual", details: "Every person matters. We treat all employees, clients, and partners with dignity and respect, regardless of their role or background." },
  { icon: Target, label: "Responsibility", description: "Accountable for our actions", details: "We take full responsibility for our work and its outcomes. When we make commitments, we honor them." },
];

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
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(easeOut * value));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedValue, setSelectedValue] = useState<typeof values[0] | null>(null);
  const [selectedCard, setSelectedCard] = useState<{ type: 'vision' | 'mission' | 'stat'; data?: any } | null>(null);

  const stats = [
    { value: 7, suffix: "+", label: "Years Experience", details: "Since 2018, we have been providing exceptional workforce solutions across industries." },
    { value: 500, suffix: "+", label: "Staff Deployed", details: "We have successfully deployed over 500 skilled professionals across various industries." },
    { value: 50, suffix: "+", label: "Happy Clients", details: "Over 50 businesses across multiple sectors trust Kurin Hygienic for their staffing needs." },
    { value: 14, suffix: "+", label: "Industries Served", details: "From construction to hospitality, healthcare to retail, we have expertise in 14+ different industries." },
  ];

  const visionDetails = "Our vision extends beyond just filling positions. We aim to create a workforce ecosystem where the right talent meets the right opportunity.";
  const missionDetails = "Our mission drives every decision we make. We are committed to understanding each client's unique needs and providing customized workforce solutions.";

  return (
    <section id="about" className="section-padding bg-gradient-subtle" ref={ref}>
      <div className="section-container">
        {/* Main Content - Added md:grid-cols-2 */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-center mb-12 md:mb-20">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -60 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }} className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-2xl -z-10 hidden md:block" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-light/10 rounded-2xl -z-10 hidden md:block" />
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
              <img src={aboutTeam} alt="Kurin Hygienic Professional Team" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl">
                  <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-accent/10"><Award className="w-5 h-5 md:w-6 md:h-6 text-accent" /></div>
                  <div>
                    <div className="text-xs md:text-sm font-semibold text-primary">ISO 9001:2015 Certified</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">Quality Management System</div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }} className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-gradient-to-br from-accent to-purple-dark text-white px-4 py-3 md:px-8 md:py-6 rounded-xl md:rounded-2xl shadow-glow-lg">
              <div className="text-2xl md:text-4xl font-bold font-display">2018</div>
              <div className="text-xs md:text-sm opacity-90">Established</div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}>
            <motion.span initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
              <Users className="w-4 h-4" /> About Us
            </motion.span>
            <h2 className="heading-lg text-primary mb-6">
              Your Trusted Partner in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-dark">Workforce Solutions</span>
            </h2>
            <p className="text-body mb-5">Established in 2018, Kurin Hygienic delivers single-window solutions for all workforce and facility challenges.</p>
            <p className="text-body mb-8">Thousands of staff from all locations are working satisfactorily and comfortably growing with Kurin Hygienic.</p>
            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} whileHover={{ y: -4, transition: { duration: 0.2 } }} onClick={() => setSelectedCard({ type: 'vision' })} className="group p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-gradient-to-br from-accent/10 to-purple-light/10"><Eye className="w-4 h-4 md:w-5 md:h-5 text-accent" /></div>
                  <h3 className="font-display font-bold text-primary text-sm md:text-base">Our Vision</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">To fulfill manpower needs by offering the right people for the right jobs.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }} whileHover={{ y: -4, transition: { duration: 0.2 } }} onClick={() => setSelectedCard({ type: 'mission' })} className="group p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-navy-light/10"><Rocket className="w-4 h-4 md:w-5 md:h-5 text-primary" /></div>
                  <h3 className="font-display font-bold text-primary text-sm md:text-base">Our Mission</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">To provide innovative workforce solutions, connecting human potential to business.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Vision/Mission Dialog */}
        <Dialog open={selectedCard !== null && selectedCard.type !== 'stat'} onOpenChange={() => setSelectedCard(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-3 rounded-xl ${selectedCard?.type === 'vision' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                  {selectedCard?.type === 'vision' ? <Eye className="w-6 h-6 text-accent" /> : <Rocket className="w-6 h-6 text-primary" />}
                </div>
                <DialogTitle className="text-xl font-display">{selectedCard?.type === 'vision' ? 'Our Vision' : 'Our Mission'}</DialogTitle>
              </div>
              <DialogDescription className="text-base leading-relaxed pt-2">{selectedCard?.type === 'vision' ? visionDetails : missionDetails}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} className="relative group" onClick={() => setSelectedCard({ type: 'stat', data: stat })}>
              <div className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="text-3xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-br from-accent to-purple-dark mb-1 md:mb-2"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Dialog */}
        <Dialog open={selectedCard?.type === 'stat'} onOpenChange={() => setSelectedCard(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-br from-accent to-purple-dark">{selectedCard?.data?.value}{selectedCard?.data?.suffix}</div>
              </div>
              <DialogTitle className="text-xl font-display">{selectedCard?.data?.label}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed pt-2">{selectedCard?.data?.details}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Core Values */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }} className="text-center">
          <h3 className="heading-md text-primary mb-10">Our <span className="text-accent">Core Values</span></h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {values.map((value, index) => (
              <motion.div key={value.label} initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }} whileHover={{ y: -6, scale: 1.02 }} onClick={() => setSelectedValue(value)} className="group p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 cursor-pointer">
                <div className="relative mx-auto mb-3 md:mb-4">
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/10 to-purple-light/10 w-fit mx-auto">
                    <value.icon className="w-5 h-5 md:w-7 md:h-7 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h4 className="font-display font-bold text-primary text-sm md:text-base mb-1 group-hover:text-accent transition-colors">{value.label}</h4>
                <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Values Dialog */}
          <Dialog open={selectedValue !== null} onOpenChange={() => setSelectedValue(null)}>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-xl bg-accent/10">{selectedValue && <selectedValue.icon className="w-6 h-6 text-accent" />}</div>
                  <DialogTitle className="text-xl font-display">{selectedValue?.label}</DialogTitle>
                </div>
                <DialogDescription className="text-base leading-relaxed pt-2">{selectedValue?.details}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
