export default function StandardCard({
  icon: Icon,
  title,
  description,
  color,
  iconColor,
}) {
  return (
    <article className="standard-card">
      <div className="standard-icon" style={{ background: color }}>
        <Icon size={24} color={iconColor} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}
