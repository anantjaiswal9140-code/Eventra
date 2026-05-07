import { useState } from "react";

import { saveEvent } from "../utils/storage";

import "../styles/create.css";

function CreateEvent() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    category: "",
    description: "",
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

    /* SUCCESS MESSAGE */
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 2500);

    /* RESET */
    setForm({
      title: "",
      date: "",
      location: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="create-page">
      {/* HEADER */}
      <div className="create-header">
        <h1>Create New Event</h1>

        <p>
          Manage and publish your college events
        </p>
      </div>

      {/* SUCCESS */}
      {success && (
        <div className="success-popup">
          Event created successfully
        </div>
      )}

      {/* FORM */}
      <div className="create-card">
        <form onSubmit={handleSubmit}>
          {/* TITLE */}
          <div className="form-group">
            <label>Event Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter event title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* DATE */}
          <div className="form-group">
            <label>Date</label>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* LOCATION */}
          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={form.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* CATEGORY */}
          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>

              <option value="Technical">
                Technical
              </option>

              <option value="Cultural">
                Cultural
              </option>

              <option value="Sports">
                Sports
              </option>

              <option value="Workshop">
                Workshop
              </option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              placeholder="Write event details..."
              rows="5"
              value={form.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* BUTTON */}
          <button type="submit">
            Publish Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;