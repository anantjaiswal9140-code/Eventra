import { useState, useEffect } from "react";
import {
  registerEvent,
  isRegistered,
} from "../utils/storage";

import "../styles/eventcard.css";

function EventCard({ event }) {
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    setRegistered(isRegistered(event.id));
  }, [event.id]);

  const handleRegister = () => {
    registerEvent(event.id);
    setRegistered(true);
  };

  return (
    <div className="card">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>

      <button
        className={`btn ${registered ? "registered" : ""}`}
        onClick={handleRegister}
        disabled={registered}
      >
        {registered ? "Already Registered" : "Register"}
      </button>
    </div>
  );
}

export default EventCard;