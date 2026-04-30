import "../styles/home.css";
import EventCard from "../components/EventCard";

function Home() {
  return (
    <div>
      {/* HERO */}
      <div className="hero">
        <h1>Discover Amazing Events</h1>
        <p>Create, manage and explore events easily</p>
      </div>

      {/* EVENT GRID */}
      <div className="event-grid">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default Home;