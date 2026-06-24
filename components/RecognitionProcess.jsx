import "../styles/RecognitionProcess.css";
const items = [
  {
    title: "Independent Jury Evaluation",
    text: [
      "All nominations are evaluated by an independent panel of distinguished CMOs and senior marketing leaders.",
      "This ensures a credible and unbiased selection process.",
    ],
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Transparent Selection Criteria",
    text: [
      "Each nomination is assessed on leadership, innovation, business impact, brand-building excellence, strategic vision, and industry contribution.",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Integrity & Fairness",
    text: [
      "We uphold the highest standards of transparency, fairness, and impartiality throughout the evaluation process.",
      "All entries are reviewed with equal consideration.",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Confidentiality Assured",
    text: [
      "All submissions and supporting information are treated with complete confidentiality.",
      "Entries are reviewed exclusively by the jury panel.",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Rigorous Review Process",
    text: [
      "Every nomination undergoes a thorough multi-stage assessment.",
      "This ensures deserving leaders are recognised for their achievements and impact.",
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The Top 100 Recognition",
    text: [
      "Final honourees will be celebrated as part of ObserveNow: Icons | Top 100 Upcoming B2B Marketeers 2026.",
      "They will join an exclusive community of India’s most influential B2B marketing leaders.",
    ],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
  },
];

export default function RecognitionProcess() {
  return (
    <section id="recognition-process" className="recognition-process">
      <div className="process-heading">
        <h2>How Recognition Process Works</h2>
      </div>

      <div className="process-grid">
        {items.map((item, index) => (
          <div className="process-item" key={index}>
            <div className="process-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="process-dot"></div>

            <div className="process-text">
              <h3>{item.title}</h3>
              <ul>
                {item.text.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}