import { useEffect, useState } from "react";

import {
  getEvents,
  getRegistrations,
  deleteEvent,
} from "../utils/storage";

import "../styles/dashboard.css";

function Dashboard() {

  const [events, setEvents] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {

    setEvents(getEvents());

    setRegistrations(getRegistrations());

  };

  // DELETE EVENT WITH CONFIRMATION
  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Do you want to delete this event?"
    );

    if (confirmDelete) {

      deleteEvent(id);

      loadData();
    }
  };

  return (
    <div className="dashboard-container">

      <h1>Organizer Dashboard</h1>

      {/* STATS */}
      <div className="stats">

        <div className="stat-card">
          <h2>{events.length}</h2>
          <p>Total Events</p>
        </div>

        <div className="stat-card">
          <h2>{registrations.length}</h2>
          <p>Total Registrations</p>
        </div>

      </div>

      {/* EVENT CARDS */}
      <div className="dashboard-grid">

        {events.map((event) => {

          const eventRegs = registrations.filter(
            (r) => r.eventId == event.id
          );

          return (

            <div
              className="dashboard-card"
              key={event.id}
            >

              <h2>{event.title}</h2>

              <p>{event.date}</p>

              <p>{event.location}</p>

              {/* Registration count */}
              <div className="reg-count">
                {eventRegs.length} Registrations
              </div>

              {/* Participants */}
              <div className="participants-section">

                <h4>Participants</h4>

                {eventRegs.length === 0 ? (

                  <p className="empty-text">
                    No participants yet
                  </p>

                ) : (

                  <ul>

                    {eventRegs.map((reg, index) => (

                      <li key={index}>
                        {reg.name}
                      </li>

                    ))}

                  </ul>

                )}

              </div>

              {/* DELETE BUTTON */}
              <button
                className="delete-btn"
                onClick={() => handleDelete(event.id)}
              >
                Delete Event
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Dashboard;