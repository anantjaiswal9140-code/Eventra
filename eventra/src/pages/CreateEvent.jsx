import { useState } from "react";
import { saveEvent } from "../utils/storage";
import "../styles/create.css";

function CreateEvent() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: Date.now(),
      ...form,
    };

    saveEvent(newEvent);

    // Show success message
    setSuccess(true);

    // Reset form
    setForm({
      title: "",
      date: "",
      location: "",
    });

    // Hide after 2 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <div className="create-container">
      <h1>Create Event</h1>

      {/* Success Message */}
      {success && (
        <div className="success-popup">
          Event created successfully
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;