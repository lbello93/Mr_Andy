import "./Standards.css";
import StandardCard from "./StandardCard";
import { standards } from "./standardsData";

export default function Standards() {
  return (
    <section className="standards-section">
      <div className="standards-container">
        <div className="standards-header">
          <h2>The Mr. Andy Standard</h2>

          <p>What sets our experience apart from the rest.</p>
        </div>

        <div className="standards-grid">
          {standards.map((item) => (
            <StandardCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
