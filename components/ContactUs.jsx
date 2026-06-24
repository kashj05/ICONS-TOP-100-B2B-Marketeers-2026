import "../styles/ContactUs.css";

const contacts = [
  {
    tag: "For Nominations",
    name: "Abuzar Zaidi",
    email: "abuzar@observenow.com",
    phone: "+91-9412787082",
    tel: "+919412787082",
  },
  {
    tag: "Jury Opportunities",
    name: "Vaishnavi Dhingra",
    email: "vaishnavi@observenow.com",
    phone: "+91-8595611171",
    tel: "+918595611171",
  },
];

export default function ContactUs() {
  return (
    <section id="contact-us" className="contact-section">
      <div className="contact-heading">
        <span>GET IN TOUCH</span>
        <h2>Contact Us</h2>
        <p>
          Connect with the ObserveNow Icons team for nominations, participation
      and jury opportunities.
        </p>
      </div>

      <div className="contact-grid">
        {contacts.map((item, index) => (
          <div className="contact-card" key={index}>
            <span>{item.tag}</span>
            <h3>{item.name}</h3>

            <a href={`mailto:${item.email}`}>{item.email}</a>
            <a href={`tel:${item.tel}`}>{item.phone}</a>
          </div>
        ))}
      </div>
    </section>
  );
}