import { useCallback, useState } from "react";
import Hero from "../sections/Hero/Hero";
import Events from "../sections/Events/Events";
import Gallery from "../sections/Gallery/Gallery";
import Packages from "../sections/Packages/Packages";
import HowItWorks from "../sections/HowItWorks/HowItWorks";
import ContactSection from "../sections/ContactSection/ContactSection";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState("");

  // Package "Select" buttons fill in the package and scroll down to the form
  const goToContact = useCallback((pkg = "") => {
    setSelectedPackage(typeof pkg === "string" ? pkg : "");
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <Hero />
      <Events />
      <Gallery />
      <Packages onSelect={goToContact} />
      <HowItWorks />

      {/* Contact card shown where the CTA used to be */}
      <ContactSection selectedPackage={selectedPackage} />
    </>
  );
}
