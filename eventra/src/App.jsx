import { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar role={role} />

      <div style={{ flex: 1 }}>
        <Routes>
          {/* COMMON */}
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />

          {/* ORGANIZER ONLY */}
          {role === "organizer" && (
            <>
              <Route path="/create" element={<CreateEvent />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/participants" element={<Participants />} />
            </>
          )}

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;