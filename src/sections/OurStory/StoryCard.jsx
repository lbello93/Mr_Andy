export default function StoryCard({
  icon: Icon,
  title,
  description,
  featured,
}) {
  return (
    <article className={`story-card ${featured ? "featured" : ""}`}>
      <Icon size={30} className="story-icon" />

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}
