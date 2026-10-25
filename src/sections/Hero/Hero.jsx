import { Link } from "react-router-dom";
import Container from "../../components/Container";

const Hero = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <div>
            {/* Badge */}

            {/* Heading */}

            <h1 className="mt-8 font-serif text-6xl leading-tight">
              The
              <span className="text-rose italic"> Sweetest</span>
              <br />
              Part of Every
              <br />
              Celebration
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-muted leading-8">
              More than a dessert station. Custom candy wall experiences are
              designed to delight guests, complement your event, and create
              unforgettable moments.
            </p>

            {/* CTA */}

            <Link
              to="/contact"
              className="inline-block mt-10 rounded-full bg-gradient-to-b from-rose to-brand px-8 py-4 text-white shadow-lg"
            >
              Design Your Experience →
            </Link>
          </div>

          {/* RIGHT */}

          <div className="relative">
            {/* Glow */}

            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-pink-300 blur-[90px] opacity-20" />

            {/* Hero Image */}

            <img
              src="/svg/bro.svg"
              alt="Candy Wall"
              className="relative rounded-3xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
