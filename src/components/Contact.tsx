import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Staff & Payroll Outsourcing",
  "Labour Supply",
  "Corporate Housekeeping",
  "Washroom Hygiene Management",
  "Floor Care Services",
  "MEP & Technical Services",
  "Professional Security Services",
  "Pantry & Cafeteria Services",
  "Other",
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.mobile.trim() || !formData.service) {
      toast({
        title: "Please fill all required fields",
        description: "Name, mobile number, and service are required.",
        variant: "destructive",
      });
      return;
    }

    // Validate mobile number format
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile.replace(/\s/g, ""))) {
      toast({
        title: "Invalid mobile number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    // Open mailto link
    const subject = encodeURIComponent(`Enquiry for ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nMobile: ${formData.mobile}\nService Required: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:kurin.pune@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening email client",
      description: "Your enquiry has been prepared. Please send the email.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Get In Touch
          </span>
          <h2 className="heading-lg text-primary mb-6">
            Ready to <span className="text-accent">Get Started?</span>
          </h2>
          <p className="text-body">
            Contact us today for a free consultation and discover how Kurin
            Hygienic can transform your facility management.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="heading-md text-primary mb-8">Contact Information</h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-accent/10 h-fit">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Head Office
                  </h4>
                  <p className="text-muted-foreground">
                    Office No. 06, Swami Plaza, Near Bird Valley Hotel,
                    <br />
                    Shahunagar, Chinchwad, Pune – 411019
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-accent/10 h-fit">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Phone
                  </h4>
                  <div className="space-y-1">
                    <a
                      href="tel:7038613623"
                      className="block text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 7038 613 623
                    </a>
                    <a
                      href="tel:8007770506"
                      className="block text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 800 777 05 06
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-accent/10 h-fit">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:kurin.pune@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    kurin.pune@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="font-display font-semibold text-primary mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl border border-border shadow-lg"
            >
              <h3 className="heading-md text-primary mb-6">Send an Enquiry</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mobile Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Required *
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Enquiry via Email
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
