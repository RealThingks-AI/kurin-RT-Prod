import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  { name: "Society Maintenance", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop" },
  { name: "Hospitality & Hotels", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" },
  { name: "Construction & Infrastructure", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop" },
  { name: "Retail & Malls", image: "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?w=400&h=300&fit=crop" },
  { name: "Power Plants", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop" },
  { name: "Government Sector", image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=400&h=300&fit=crop" },
  { name: "Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" },
  { name: "Finance", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" },
];

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="section-padding bg-light-gray" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Our Reach
          </span>
          <h2 className="heading-lg text-primary mb-6">
            Industries <span className="text-accent">We Serve</span>
          </h2>
          <p className="text-body">
            From construction sites to corporate offices, we deliver excellence
            across diverse sectors.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 || index === 5 ? "h-full min-h-[300px] md:min-h-[400px]" : "h-40 md:h-48"
                }`}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Text */}
                <div className="absolute inset-0 flex items-end p-4 md:p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display font-bold text-primary-foreground text-sm md:text-lg">
                      {industry.name}
                    </h3>
                    <div className="h-0.5 w-0 group-hover:w-12 bg-accent transition-all duration-300 mt-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
