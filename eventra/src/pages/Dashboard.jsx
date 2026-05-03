import { getEvents, getRegistrations } from "../utils/storage";
import "../styles/dashboard.css";

function Dashboard() {
  const events = getEvents() || [];
  const registrations = getRegistrations() || {};

  const totalEvents = Number(events.length) || 0;

  let totalRegistrations = 0;

  Object.values(registrations).forEach((list) => {
    if (Array.isArray(list)) {
      totalRegistrations += Number(list.length) || 0;
    }
  });

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="stats">
        <div className="card">
          <h2>{totalEvents}</h2>
          <p>Total Events</p>
        </div>

        <div className="card">
          <h2>{totalRegistrations}</h2>
          <p>Total Registrations</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;