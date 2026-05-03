import { useParams } from "react-router-dom";
import { getEvents } from "../utils/storage";
import "../styles/details.css";

function EventDetails() {
  const { id } = useParams();
  const events = getEvents();

  const event = events.find((e) => e.id.toString() === id);

  if (!event) {
    return <p style={{ textAlign: "center" }}>Event not found</p>;
  }

  return (
    <div className="details-container">
      <h1>{event.title}</h1>
      <p className="date">{event.date}</p>
      <p className="location">{event.location}</p>

      <button className="details-btn">Register</button>
    </div>
  );
}

export default EventDetails;