import { useEffect, useState } from "react";
import { getEvents } from "../utils/storage";
import EventCard from "../components/EventCard";
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
            <p>Create events and track participants</p>
          </>
        ) : (
          <>
            <h1>Explore Events</h1>
            <p>Find and register for events</p>
          </>
        )}
      </div>

      {/* GRID */}
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