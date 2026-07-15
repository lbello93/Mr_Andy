import Navbar from "../components/Navbar/Navbar";

import Hero from "../sections/Hero/Hero";
import Features from "../sections/Features/Features";
import Events from "../sections/Events/Events";
import Gallery from "../sections/Gallery/Gallery";
import Packages from "../sections/Packages/Packages";
import HowItWorks from "../sections/HowItWorks/HowItWorks";
import Testimonials from "../sections/Testimonials/Testimonials";
import CTA from "../sections/CTA/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <Events />

      <Gallery />

      <Packages />

      <HowItWorks />

      <Testimonials />

      <CTA />
    </>
  );
}
