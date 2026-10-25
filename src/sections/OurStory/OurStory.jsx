const chapters = [
  {
    title: "Every Sweet Dream Has a Beginning",
    paragraphs: [
      "Every great idea starts somewhere. For Andy, it began around middle school, about six years ago, with a passion for making chocolate.",
      "What started as a hobby at home soon became something much more. Andy loved experimenting with new recipes, putting his own spin on familiar favorites, and discovering how a simple ingredient could become something special. Beyond making chocolate, he began imagining a future where he could turn his passion into a business of his own.",
      "His dream was never limited to making sweets in his kitchen. Andy imagined building something bigger, a business inspired by his love of candy and his desire to create experiences that people could enjoy and remember.",
      "That dream became the inspiration behind Mr. Andy\u2019s Candy Wall.",
    ],
  },
  {
    title: "A Gift That Brought a Dream to Life",
    paragraphs: [
      "A defining moment in Andy\u2019s journey came when Ms. Rita Graves, principal of Lamar High School, gifted him the candy wall as a graduation present.",
      "Ms. Graves recognized Andy\u2019s passion, believed in his potential, and wanted to encourage his entrepreneurial ambitions. Her gift was more than a piece of equipment. It was a meaningful gesture of support for a young entrepreneur with a vision for his future.",
      "For Andy, it represented an opportunity to take the next step toward turning his ideas into reality.",
      "Rather than simply accepting the candy wall as it was, Andy designed it himself, bringing his creativity and vision together to create something distinctive. The result was the foundation of a business built around making celebrations sweeter and giving guests an experience they would remember.",
    ],
  },
  {
    title: "Designed with Passion, Created for Celebration",
    paragraphs: [
      "Today, Mr. Andy\u2019s Candy Wall transforms a love of candy into an interactive experience for birthdays, weddings, graduations, corporate events, and other special occasions.",
      "With its colorful dispensers, carefully selected sweets, and customizable presentation, the candy wall adds something memorable to any celebration. From coordinating candy colors with an event\u2019s theme to incorporating personalized details, each setup is designed to complement the occasion.",
      "But the experience is about more than candy. It is about the excitement of discovering a favorite treat, sharing a sweet moment with friends and family, and creating memories around something everyone can enjoy.",
      "Every detail reflects the same spirit that started Andy\u2019s journey: creativity, curiosity, and a genuine love for making something special.",
    ],
  },
  {
    title: "The Beginning of Something Bigger",
    paragraphs: [
      "Mr. Andy\u2019s Candy Wall is the first step in a much larger entrepreneurial dream.",
      "Andy hopes to grow the business throughout Texas, reaching more communities and bringing his candy experience to more celebrations. He also has ambitions beyond the candy wall, with bigger ideas that will take shape as the business grows.",
      "For now, his focus is on building a strong foundation, creating memorable experiences for every customer, and turning the opportunity he was given into something meaningful.",
      "Because every big dream starts with a first step, and sometimes, that first step is a little sweeter than expected.",
    ],
  },
  {
    title: "A Little Sweetness, A Lasting Memory",
    paragraphs: [
      "From making chocolate at home to designing his own candy wall, Andy\u2019s journey is a reminder of what can happen when passion meets opportunity and someone believes in your potential.",
      "What began as a childhood interest is becoming a business built on creativity, ambition, and the joy of bringing people together.",
      "At Mr. Andy\u2019s Candy Wall, every celebration has a story. We are proud to add a little sweetness to yours.",
    ],
  },
];

export default function OurStory() {
  return (
    <section
      aria-labelledby="our-story-title"
      className="bg-surface px-6 py-24 max-[768px]:py-[72px]"
    >
      <div className="mx-auto max-w-[768px]">
        <header className="mb-16 text-center max-[768px]:mb-12">
          <h2
            id="our-story-title"
            className="text-[48px] font-bold leading-[1.15] text-ink max-[768px]:text-[36px]"
          >
            The Story Behind Mr. Andy{"\u2019"}s Candy Wall
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-1 w-24 rounded-full bg-gold"
          />
        </header>

        <div className="flex flex-col gap-14 max-[768px]:gap-10">
          {chapters.map((chapter) => (
            <article key={chapter.title}>
              <h3 className="mb-5 text-[30px] font-bold leading-[1.25] text-brand max-[768px]:text-[24px]">
                {chapter.title}
              </h3>
              <div className="flex flex-col gap-5">
                {chapter.paragraphs.map((text) => (
                  <p
                    key={text}
                    className="text-[18px] leading-[1.7] text-muted max-[768px]:text-[16px]"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-16 rounded-3xl border border-line bg-white px-8 py-10 text-center font-serif text-[26px] italic leading-[1.35] text-ink shadow-card max-[768px]:mt-12 max-[768px]:px-6 max-[768px]:py-8 max-[768px]:text-[21px]">
          Mr. Andy{"\u2019"}s Candy Wall. A little sweetness, a lasting memory.
        </p>
      </div>
    </section>
  );
}