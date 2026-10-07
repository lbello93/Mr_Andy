import { ArrowRight } from "lucide-react";

export default function EventCategories() {
  const eventCategories = [
    {
      title: "Corporate Events",
      subtitle: "Professional. Interactive. Memorable.",
      description:
        "Elevate your corporate identity with a candy experience that leaves a lasting impression. From Employee Appreciation days to high-stakes Product Launches, we customize every detail to match your brand's palette and tone.",
      points: [
        "Custom Branding",
        "Logo Integrated Displays",
        "Branded Candy Wrappers",
      ],
      image: "/eventCard/cor.png",
      reverse: false,
    },

    {
      title: "Birthday Celebrations",
      subtitle: "Make every birthday sweeter.",
      description:
        "Whether it's a whimsical 1st birthday or a glam Sweet 16, our candy walls are the ultimate party showstopper. We create vibrant, rainbow-filled displays that delight guests of all ages.",
      image: "/eventCard/bir.png",
      reverse: true,
    },

    {
      title: "Baby Showers",
      subtitle: "Celebrate life's sweetest arrival.",
      description:
        "Our baby shower candy walls are designed with a delicate touch. Think soft pastels, whimsical florals, and a menu of treats as sweet as the new arrival.",
      image: "/eventCard/baby.png",
      reverse: false,
    },

    {
      title: "Weddings",
      subtitle: "A beautiful treat your guests will never forget.",
      description:
        "Luxury meets confectionery. Our wedding displays use premium glass, organic floral integrations, and sophisticated monochromatic palettes like blush and ivory to complement your decor perfectly.",
      quote:
        "The candy wall was the highlight of our reception and became the most photographed moment of the evening.",
      image: "/eventCard/wedd.png",
      reverse: true,
    },

    {
      title: "Graduation Parties",
      subtitle: "Celebrate every achievement.",
      description:
        "Reward years of hard work with a prestigious gold and black themed display. Perfect for high school graduations and university celebrations alike.",
      image: "/eventCard/grad.png",
      reverse: false,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Plus+Jakarta+Sans:wght@400;700&display=swap');

        /* =========================================
           EVENT CATEGORIES
        ========================================= */

        .event-categories {
          width: 100%;

          box-sizing: border-box;

          display: flex;
          flex-direction: column;

          justify-content: center;
          align-items: center;

          padding: 96px 0;

          gap: 128px;

          background: #fcf9f8;
        }

        /* =========================================
           CATEGORY ROW
        ========================================= */

        .event-card {
          width: 100%;
          max-width: 1280px;

          min-height: 303.91px;

          box-sizing: border-box;

          display: flex;
          flex-direction: row;

          justify-content: center;
          align-items: center;

          padding: 0 64px;

          gap: 64px;
        }

        /* =========================================
           REVERSE ROW
        ========================================= */

        .event-card.reverse {
          flex-direction: row-reverse;
        }

        /* =========================================
           IMAGE
        ========================================= */

        .event-image {
          width: 544px;
          height: 303.91px;

          flex: 1 1 0;

          min-width: 0;

          border-radius: 32px;

          overflow: hidden;

          background: rgba(255, 255, 255, 0.002);

          box-shadow:
            0px 20px 20px -5px rgba(185, 2, 53, 0.08);
        }

        .event-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          border-radius: 32px;
        }

        /* =========================================
           CONTENT
        ========================================= */

        .event-content {
          width: 544px;

          flex: 1 1 0;

          min-width: 0;

          display: flex;
          flex-direction: column;

          align-items: flex-start;

          gap: 23px;
        }

        /* =========================================
           TITLE
        ========================================= */

        .event-content h2 {
          width: 100%;

          margin: 0;

          padding: 0;

          font-family: "Playfair Display", serif;

          font-style: normal;
          font-weight: 700;

          font-size: 48px;
          line-height: 58px;

          color: #1c1b1b;
        }

        /* =========================================
           SUBTITLE
        ========================================= */

        .event-content h5 {
          width: 100%;

          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-style: normal;
          font-weight: 700;

          font-size: 18px;
          line-height: 29px;

          color: #b90235;
        }

        /* =========================================
           DESCRIPTION
        ========================================= */

        .event-content > p {
          width: 100%;

          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-style: normal;
          font-weight: 400;

          font-size: 16px;
          line-height: 24px;

          color: #5b4041;
        }

        /* =========================================
           EVENT LIST
        ========================================= */

        .event-list {
          width: 100%;

          margin: 0;
          padding: 1px 0 0;

          list-style: none;

          display: flex;
          flex-direction: column;

          align-items: flex-start;

          gap: 12px;
        }

        .event-list li {
          width: 100%;
          min-height: 24px;

          box-sizing: border-box;

          display: flex;

          flex-direction: row;

          align-items: center;

          gap: 12px;

          margin: 0;
          padding: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 16px;
          line-height: 24px;

          font-weight: 400;

          color: #1c1b1b;
        }

        /* Figma uses small red square indicators */

        .event-check {
          width: 11.67px;
          height: 11.67px;

          flex-shrink: 0;

          background: #b90235;

          display: block;
        }

        /* =========================================
           QUOTE
        ========================================= */

        .event-quote {
          width: 100%;

          min-height: 123px;

          box-sizing: border-box;

          display: flex;
          align-items: center;

          padding: 25px 24px 24px;

          background: #ffffff;

          border: 1px solid #e4bdbe;

          border-radius: 16px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-style: italic;
          font-weight: 400;

          font-size: 16px;
          line-height: 24px;

          color: #5b4041;
        }

        /* =========================================
           BOOK YOUR EVENT
        ========================================= */

        .event-link {
          width: 175px;
          height: 21px;

          box-sizing: border-box;

          display: flex;
          flex-direction: row;

          align-items: center;

          gap: 8px;

          margin: 0;
          padding: 1px 0 0;

          background: transparent;

          border: none;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-style: normal;
          font-weight: 400;

          font-size: 14px;
          line-height: 20px;

          letter-spacing: 1.4px;

          text-transform: uppercase;

          color: #b90235;

          cursor: pointer;
        }

        .event-link span {
          white-space: nowrap;
        }

        .event-link svg {
          width: 16px;
          height: 16px;

          flex-shrink: 0;

          transition: transform 0.25s ease;
        }

        .event-link:hover svg {
          transform: translateX(5px);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1100px) {
          .event-card,
          .event-card.reverse {
            gap: 40px;

            padding: 0 40px;
          }

          .event-image,
          .event-content {
            width: 50%;
          }

          .event-content h2 {
            font-size: 40px;
            line-height: 49px;
          }

          .event-image {
            height: 280px;
          }
        }

        /* =========================================
           MOBILE / TABLET
        ========================================= */

        @media (max-width: 800px) {
          .event-categories {
            padding: 80px 24px;

            gap: 80px;
          }

          .event-card,
          .event-card.reverse {
            width: 100%;
            max-width: 650px;

            min-height: auto;

            padding: 0;

            display: flex;

            flex-direction: column;

            align-items: stretch;

            gap: 32px;
          }

          .event-image {
            width: 100%;
            height: 300px;

            order: 0;
          }

          .event-content {
            width: 100%;

            order: 1;

            gap: 18px;
          }

          .event-content h2 {
            font-size: 38px;
            line-height: 46px;
          }

          .event-content h5 {
            font-size: 17px;
            line-height: 27px;
          }

          .event-content > p {
            font-size: 16px;
            line-height: 25px;
          }

          .event-list {
            gap: 10px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .event-categories {
            padding: 70px 20px;

            gap: 70px;
          }

          .event-card,
          .event-card.reverse {
            gap: 28px;
          }

          .event-image {
            height: 250px;

            border-radius: 24px;
          }

          .event-image img {
            border-radius: 24px;
          }

          .event-content {
            gap: 16px;
          }

          .event-content h2 {
            font-size: 34px;
            line-height: 42px;
          }

          .event-content h5 {
            font-size: 16px;
            line-height: 25px;
          }

          .event-content > p {
            font-size: 15px;
            line-height: 24px;
          }

          .event-list li {
            font-size: 15px;
            line-height: 23px;
          }

          .event-quote {
            min-height: auto;

            padding: 20px;

            font-size: 15px;
            line-height: 23px;
          }

          .event-link {
            font-size: 13px;
            letter-spacing: 1.3px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 400px) {
          .event-categories {
            padding: 60px 16px;

            gap: 60px;
          }

          .event-image {
            height: 220px;

            border-radius: 20px;
          }

          .event-image img {
            border-radius: 20px;
          }

          .event-content h2 {
            font-size: 30px;
            line-height: 38px;
          }

          .event-content h5 {
            font-size: 15px;
            line-height: 23px;
          }

          .event-content > p {
            font-size: 14px;
            line-height: 22px;
          }

          .event-quote {
            padding: 18px;

            font-size: 14px;
            line-height: 22px;
          }
        }
      `}</style>

      <section className="event-categories">
        {eventCategories.map((event) => (
          <article
            key={event.title}
            className={`event-card ${event.reverse ? "reverse" : ""}`}
          >
            {/* IMAGE */}

            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>

            {/* CONTENT */}

            <div className="event-content">
              <h2>{event.title}</h2>

              <h5>{event.subtitle}</h5>

              <p>{event.description}</p>

              {/* Points */}

              {event.points && (
                <ul className="event-list">
                  {event.points.map((point) => (
                    <li key={point}>
                      <span className="event-check"></span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Wedding quote */}

              {event.quote && (
                <div className="event-quote">"{event.quote}"</div>
              )}

              {/* CTA */}

              <button type="button" className="event-link">
                <span>Book Your Event</span>

                <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
