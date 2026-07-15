import Container from "../../components/Container";
import EventCard from "../../components/EventCard/EventCard";
import { events } from "../../data/events";

const Events = () => {
  return (
    <section id="events" className="bg-[#FCF9F8] py-28">
      <Container>
        <div className="text-center">
          <h2 className="text-5xl font-serif">Curated For Your Celebration</h2>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Events;
