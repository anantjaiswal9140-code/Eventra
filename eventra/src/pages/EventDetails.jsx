import { useParams } from "react-router-dom";
import { useState } from "react";
import { getEvents, saveRegistration } from "../utils/storage";
import "../styles/details.css";

function EventDetails() {
  const { id } = useParams();
  const events = getEvents();
  const event = events.find((e) => e.id == id);

  const role = localStorage.getItem("role");

  const [form, setForm] = useState({
    name: "",
    email: "",
    enrollment: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRegistration = {
      eventId: id,
      ...form,
    };

    saveRegistration(newRegistration);

    alert("Registered successfully");

    setForm({
      name: "",
      email: "",
      enrollment: "",
    });
  };

  if (!event) return <p>Event not found</p>;

  return (
    <div className="details-container">
      <h1>{event.title}</h1>
      <p className="date">{event.date}</p>
      <p className="location">{event.location}</p>

      {/* ONLY PARTICIPANT CAN REGISTER */}
      {role === "participant" && (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="enrollment"
            placeholder="Enrollment No"
            value={form.enrollment}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      )}

      {/* ORGANIZER VIEW MESSAGE */}
      {role === "organizer" && (
        <p style={{ marginTop: "15px", color: "#6b7280" }}>
          You are viewing this event as an organizer.
        </p>
      )}
    </div>
  );
}

export default EventDetails;