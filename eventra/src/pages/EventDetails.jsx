import { useParams } from "react-router-dom";
import { useState } from "react";
import { getEvents, saveRegistration } from "../utils/storage";
import "../styles/details.css";

function EventDetails() {
  const { id } = useParams();
  const events = getEvents();

  const event = events.find((e) => e.id.toString() === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enrollment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!event) {
    return <p style={{ textAlign: "center" }}>Event not found</p>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    saveRegistration(event.id, formData);
    setSubmitted(true);
  };

  return (
    <div className="details-container">
      <h1>{event.title}</h1>
      <p className="date">{event.date}</p>
      <p className="location">{event.location}</p>

      {!submitted ? (
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="enrollment"
            placeholder="Enrollment Number"
            value={formData.enrollment}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      ) : (
        <p className="success">Registration completed</p>
      )}
    </div>
  );
}

export default EventDetails;