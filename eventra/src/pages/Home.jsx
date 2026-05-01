import { useEffect, useState } from "react";
import { getEvents } from "../utils/storage";
import EventCard from "../components/EventCard";
import "../styles/home.css";

function Home() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  // Filter logic
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* HERO */}
      <div className="hero">
        <h1>Discover Amazing Events</h1>
        <p>Create, manage and explore events easily</p>
      </div>

      {/* SEARCH BAR */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className="event-grid">
        {filteredEvents.length === 0 ? (
          <p className="empty">No matching events found 🚀</p>
        ) : (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;