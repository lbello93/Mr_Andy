import Navbar from "../components/Navbar/Navbar";

import Hero from "../sections/Hero/Hero";
import Events from "../sections/Events/Events";
import Gallery from "../sections/Gallery/Gallery";
import Packages from "../sections/Packages/Packages";
import HowItWorks from "../sections/HowItWorks/HowItWorks";
import CTA from "../sections/CTA/CTA";
import Footer from "../sections/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />


      <Events />

      <Gallery />

      <Packages />

      <HowItWorks />


      <CTA />
      <Footer />
    </>
  );
}
