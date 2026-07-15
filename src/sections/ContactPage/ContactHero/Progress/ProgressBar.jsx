import "./ProgressBar.css";

export default function ProgressBar({ step, totalSteps }) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="progress">
      <div className="progress-header">
        <h4>Plan Your Sweet Celebration</h4>

        <span>
          Step {step}/{totalSteps}
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}
