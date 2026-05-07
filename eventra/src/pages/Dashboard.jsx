import { useEffect, useState } from "react";

import {
  getEvents,
  getTotalRegistrations,
  getRegistrationsByEvent,
  deleteEvent,
} from "../utils/storage";

import "../styles/dashboard.css";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [totalRegs, setTotalRegs] = useState(0);

  const loadData = () => {
    const ev = getEvents();

    setEvents(ev);

    setTotalRegs(getTotalRegistrations());
  };

  useEffect(() => {
    loadData();
  }, []);

  /* DELETE WITH CONFIRMATION */
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Do you really want to delete this event?"
    );

    if (!confirmDelete) return;

    deleteEvent(id);

    loadData();
  };

  return (
    <div className="dashboard-container">
      <h1>Organizer Dashboard</h1>

      {/* ================= STATS ================= */}
      <div className="stats">
        <div className="stat-card">
          <h2>{events.length}</h2>
          <p>Total Events</p>
        </div>

        <div className="stat-card">
          <h2>{totalRegs}</h2>
          <p>Total Registrations</p>
        </div>
      </div>

      {/* ================= EVENTS ================= */}
      <div className="dashboard-events">
        {events.length === 0 ? (
          <p>No events created yet</p>
        ) : (
          events.map((event) => {
            const regs = getRegistrationsByEvent(event.id);

            return (
              <div className="dashboard-card" key={event.id}>
                {/* EVENT INFO */}
                <div>
                  <h3>{event.title}</h3>

                  <p>{event.date}</p>

                  <p>{event.location}</p>

                  <div className="reg-count">
                    {regs.length} Registrations
                  </div>
                </div>

                {/* PARTICIPANTS */}
                <div className="participants-section">
                  <h4>Participants</h4>

                  {regs.length === 0 ? (
                    <p className="empty-text">
                      No participants yet
                    </p>
                  ) : (
                    <div className="participant-list">
                      {regs.map((r, index) => (
                        <div className="participant-item" key={index}>
                          <strong>{r.name}</strong>

                          <span>{r.email}</span>

                          <span>{r.enrollment}</span>
                        </div>
                      ))}
                    </div>
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
          })
        )}
      </div>
    </div>
  );
}

export default Dashboard;