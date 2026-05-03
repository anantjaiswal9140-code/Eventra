import { getEvents, getRegistrations } from "../utils/storage";
import "../styles/participants.css";

function Participants() {
  const events = getEvents();
  const registrations = getRegistrations();

  return (
    <div className="participants">
      <h1>Participants</h1>

      {events.map((event) => {
        const users = registrations[event.id] || [];

        return (
          <div key={event.id} className="event-block">
            <h2>{event.title}</h2>

            {users.length === 0 ? (
              <p className="empty">No participants yet</p>
            ) : (
              <ul>
                {users.map((user, index) => (
                  <li key={index}>
                    {user.name} ({user.email})
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Participants;