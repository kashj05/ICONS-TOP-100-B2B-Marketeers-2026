import "../styles/Overview.css";

export default function Overview() {
  return (
    <section id="overview" className="overview-section">
      <div className="overview-content">
        <h2>Overview</h2>

        <p>
          The ObserveNow Top 100 Upcoming B2B Marketeers 2026 is an exclusive industry
          recognition honoring the marketing leaders who are driving innovation,
          building influential brands, and delivering measurable business impact
          across the B2B landscape.
        </p>

        <p>
          Selected through a rigorous evaluation process by an independent jury
          of distinguished CMOs and senior marketing leaders, the Top 100 will
          be recognized for their leadership, creativity, strategic vision,
          marketing excellence, and contribution to the industry.
        </p>

        <p>
          Open to B2B marketing professionals across brands, organizations, and
          industries, this recognition celebrates the individuals shaping the
          future of marketing and setting new benchmarks for success.
        </p>

        <p>
          The final honorees will be celebrated at an exclusive recognition
          ceremony attended by industry leaders, peers, and marketing
          professionals from across the country.
        </p>
      </div>

      <div className="keydate-box">
        <h3>Key Dates</h3>

        <div className="timeline">
          <div className="date-item">
            <span></span>
            <h4>10 July 2026</h4>
            <p>Nomination Close</p>
          </div>

          <div className="date-item">
            <span></span>
            <h4>11 – 20 July 2026</h4>
            <p>Jury Evaluation</p>
          </div>

          <div className="date-item">
            <span></span>
            <h4>24 July 2026</h4>
            <p>Recognition Ceremony</p>
          </div>
        </div>
      </div>
    </section>
  );
}