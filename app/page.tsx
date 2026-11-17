import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import FeaturedService from "@/components/FeaturedService";
import ServicesGrid from "@/components/ServicesGrid";
import ResidentialCommercial from "@/components/ResidentialCommercial";
import AgingInPlace from "@/components/AgingInPlace";
import PastProjects from "@/components/PastProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <a href="#contact" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-amber focus:px-4 focus:py-2 focus:text-ink">Skip to contact form</a>
      <Header />
      <main>
        <Hero />
        <ValueStrip />
        <FeaturedService />
        <ServicesGrid />
        <ResidentialCommercial />
        <AgingInPlace />
        <PastProjects />
        <WhyChooseUs />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileCallBar />
      <JsonLd />
    </>
  );
}
