import { Link, useNavigate } from "react-router-dom";

import "../styles/navbar.css";

function Navbar({ role }) {

  const navigate = useNavigate();

  const switchRole = () => {

    // Remove old role
    localStorage.removeItem("role");

    // Go to home
    navigate("/");

    // Reload app
    window.location.reload();
  };

  return (

    <nav className="navbar">

      <h2 className="logo">

        {role === "organizer"
          ? "Organizer Panel"
          : "Eventra"}

      </h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        {role === "organizer" && (
          <>
            <Link to="/create">Create Event</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/participants">Participants</Link>
          </>
        )}

        <button
          className="switch-btn"
          onClick={switchRole}
        >
          Switch Role
        </button>

      </div>

    </nav>
  );
}

export default Navbar;