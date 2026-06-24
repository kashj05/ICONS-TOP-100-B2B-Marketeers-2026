import { useState } from "react";
import "../styles/WhyParticipate.css";

const cards = [
  {
    title: "Get Recognised by the Best",
    text: "Have your work and achievements evaluated by an esteemed independent jury comprising leading CMOs and senior marketing leaders.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Join an Exclusive League of B2B Marketeers",
    text: "Be recognized among India's most influential B2B marketing professionals who are shaping the future of the industry.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Elevate Your Professional Brand",
    text: "Showcase your leadership, strategic vision, and marketing excellence to peers, industry leaders, and the wider business community.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Expand Your Network & Visibility",
    text: "Gain access to an exclusive community of marketing leaders and amplify your presence across ObserveNow's 1.5M+ CXO network.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
  },
];

export default function WhyParticipate() {
  const [active, setActive] = useState(0);

  return (
    <section id="why-participate" className="why-participate">
      <div className="why-participate-head">
        <h2>Why Participate?</h2>
        <p>
          The ObserveNow Icons | Top 100 Upcoming B2B Marketeers 2026 celebrates the
          leaders shaping the future of B2B marketing through innovation,
          strategic thinking, and measurable business impact.
        </p>
      </div>

      <div className="participate-accordion">
        {cards.map((card, index) => (
          <button
            key={index}
            type="button"
            className={`participate-card ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="participate-overlay"></div>

            <div className="participate-vertical-title">{card.title}</div>

            <div className="participate-content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}