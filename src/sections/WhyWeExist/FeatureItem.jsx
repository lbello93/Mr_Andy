export default function FeatureItem({
  icon: Icon,
  color,
  iconColor,
  title,
  description,
}) {
  return (
    <div className="feature-item">
      <div className="feature-icon" style={{ background: color }}>
        <Icon size={20} color={iconColor} />
      </div>

      <div>
        <h4>{title}</h4>

        <p>{description}</p>
      </div>
    </div>
  );
}
