import { useState,React } from "react";
import { saveEvent } from "../utils/storage";
import "../styles/create.css";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: Date.now(),
      title,
      date,
      location,
    };

    saveEvent(newEvent);

    alert("Event Created Successfully 🚀");

    setTitle("");
    setDate("");
    setLocation("");
  };

  return (
    <div className="form-container">
      <h2>Create Event</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;