import { useEffect, useState } from "react";
import { getEvents } from "../utils/storage";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const [events, setEvents] = useState([]);
  const role = localStorage.getItem("role");

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  return (
    <div>
      {/* HERO */}
      <div className="hero">
        {role === "organizer" ? (
          <>
            <h1>Manage Your Events</h1>
            <p>Create and monitor your events</p>

            {/* NEW BUTTON */}
            <Link to="/create" className="primary-btn">
              + Create New Event
            </Link>
          </>
        ) : (
          <>
            <h1>Explore Events</h1>
            <p>Find and register for events</p>
          </>
        )}
      </div>

      {/* EVENTS */}
      <div className="event-grid">
        {events.length === 0 ? (
          <p>No events available</p>
        ) : (
          events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;