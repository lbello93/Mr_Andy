export default function FloatingCard({ icon: Icon, title, className, rotate }) {
  return (
    <div
      className={`floating-card ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <Icon size={22} />

      <span>{title}</span>
    </div>
  );
}
