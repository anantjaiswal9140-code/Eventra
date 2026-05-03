import { Link } from "react-router-dom";
import "../styles/eventcard.css";

function EventCard({ event }) {
  return (
    <div className="card">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>

      <Link to={`/event/${event.id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
}

export default EventCard;