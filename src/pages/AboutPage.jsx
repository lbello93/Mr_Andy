import AboutHero from "../sections/About/AboutHero";
import AboutCTA from "../sections/AboutCTA/AboutCTA";
import OurStory from "../sections/OurStory/OurStory";
import OurPromise from "../sections/Promise/Promise";
import Standards from "../sections/Standards/Standards";
import WhyWeExist from "../sections/WhyWeExist/WhyWeExist";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <WhyWeExist />
      <Standards />
      <OurPromise />
      <AboutCTA />
      {/* About Sections Here */}
    </>
  );
}
