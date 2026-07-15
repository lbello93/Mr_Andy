import Container from "../../components/Container";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { features } from "../../data/features";

const Features = () => {
  return (
    <section className="bg-[#F6F3F2] py-28">
      <Container>
        <div className="text-center">
          <h2 className="text-5xl font-serif">More Than a Candy Wall</h2>

          <p className="mt-5 text-gray-600">
            We elevate events through immersive design and the simple joy of
            pick-and-mix.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bg={feature.bg}
              color={feature.color}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
