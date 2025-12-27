import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kurin Hygienic – Premium Manpower & Facility Management Solutions</title>
        <meta
          name="description"
          content="Kurin Hygienic provides 24x7 quality manpower and facility management services. Staff outsourcing, housekeeping, security, and MEP services in Pune."
        />
        <meta
          name="keywords"
          content="manpower solutions, facility management, housekeeping, security services, Pune, staff outsourcing"
        />
        <link rel="canonical" href="https://kurinhygienic.com" />
      </Helmet>

      <main className="relative">
        <Navigation />
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Process />
        <Industries />
        <Clients />
        <Contact />
        <Footer />
        <FloatingButtons />
      </main>
    </>
  );
};

export default Index;
