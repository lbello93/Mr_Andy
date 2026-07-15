export default function StepCard({ number, title, subtitle }) {
  return (
    <div className="step">
      <div className="step-circle">{number}</div>

      <h4>{title}</h4>

      <p>{subtitle}</p>
    </div>
  );
}
