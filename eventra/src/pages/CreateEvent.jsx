import { useState } from "react";

import { saveEvent } from "../utils/storage";

import "../styles/create.css";

function CreateEvent() {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    const newEvent = {
      id: Date.now(),
      title,
      date,
      location,
      category,
      description,
    };

    saveEvent(newEvent);

    setSuccess(true);

    setTitle("");
    setDate("");
    setLocation("");
    setCategory("");
    setDescription("");

    setTimeout(() => {
      setSuccess(false);
    }, 2500);
  };

  return (

    <div className="create-page">

      <div className="create-container">

        <h1>Create New Event</h1>

        <p className="create-subtitle">
          Manage and publish your college events
        </p>

        {success && (
          <div className="success-popup">
            Event created successfully
          </div>
        )}

        <form
          className="create-form"
          onSubmit={handleSubmit}
        >

          {/* TITLE */}
          <div>

            <label>Event Title</label>

            <input
              type="text"
              placeholder="Enter event title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              required
            />

          </div>

          {/* DATE */}
          <div>

            <label>Date</label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              required
            />

          </div>

          {/* LOCATION */}
          <div>

            <label>Location</label>

            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
              required
            />

          </div>

          {/* CATEGORY */}
          <div>

            <label>Category</label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              required
            >
              <option value="">
                Select category
              </option>

              <option value="Tech">
                Tech
              </option>

              <option value="Sports">
                Sports
              </option>

              <option value="Cultural">
                Cultural
              </option>

            </select>

          </div>

          {/* DESCRIPTION */}
          <div>

            <label>Description</label>

            <textarea
              placeholder="Write event details..."
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

          </div>

          <button
            type="submit"
            className="publish-btn"
          >
            Publish Event
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateEvent;