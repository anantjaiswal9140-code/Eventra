import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Dashboard from "./pages/Dashboard";
import Participants from "./pages/Participants";
import CreateEvent from "./pages/CreateEvent";
import RoleSelect from "./pages/RoleSelect";

function App() {
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (role) {
      document.body.setAttribute("data-role", role);
    }
  }, [role]);

  if (!role) {
    return <RoleSelect />;
  }

  return (
    <div style={{ display: "flex" }}>
      {/* Organizer → Sidebar */}
      {role === "organizer" && <Sidebar />}

      <div
        style={{
          flex: 1,
          marginLeft: role === "organizer" ? "220px" : "0",
        }}
      >
        {/* Participant → Navbar */}
        {role === "participant" && <Navbar role={role} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />

          {role === "organizer" && (
            <>
              <Route path="/create" element={<CreateEvent />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/participants" element={<Participants />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;