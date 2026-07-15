import "./EventCategories.css";

import EventCategoryCard from "./EventCategoryCard";
import { eventCategories } from "./eventData";

export default function EventCategories() {
  return (
    <section className="event-categories">
      {eventCategories.map((event) => (
        <EventCategoryCard key={event.title} {...event} />
      ))}
    </section>
  );
}
