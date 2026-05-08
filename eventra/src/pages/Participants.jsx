import { useEffect, useState } from "react";

import {
  getRegistrations,
  getEvents,
} from "../utils/storage";

import "../styles/participants.css";

function Participants() {

  const [participants, setParticipants] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {

    setParticipants(getRegistrations());

    setEvents(getEvents());

  }, []);

  // Get event title
  const getEventName = (eventId) => {

    const event = events.find(
      (e) => e.id == eventId
    );

    return event ? event.title : "Unknown Event";
  };

  return (
    <div className="participants-container">

      <h1>Participants</h1>

      {participants.length === 0 ? (

        <p>No participants registered yet.</p>

      ) : (

        <div className="participants-table">

          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Enrollment</th>
                <th>Event</th>
              </tr>
            </thead>

            <tbody>

              {participants.map((participant, index) => (

                <tr key={index}>

                  <td>{participant.name}</td>

                  <td>{participant.email}</td>

                  <td>{participant.enrollment}</td>

                  <td>
                    {getEventName(participant.eventId)}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default Participants;