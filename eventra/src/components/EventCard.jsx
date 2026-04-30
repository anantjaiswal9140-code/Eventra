import "../styles/eventcard.css";

function EventCard() {
  return (
    <div className="card">
      <h3>Tech Fest 2026</h3>
      <p>📅 10 May 2026</p>
      <p>📍 Delhi</p>

      <button className="btn">View Details</button>
    </div>
  );
}

export default EventCard;