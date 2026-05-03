import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Dashboard from "./pages/Dashboard";
import Participants from "./pages/Participants";
import CreateEvent from "./pages/CreateEvent";
import RoleSelect from "./pages/RoleSelect";

function App() {
  const role = localStorage.getItem("role");

  // If no role selected → show selection screen
  if (!role) {
    return <RoleSelect />;
  }

  return (
    <div>
      <Navbar role={role} />

      <Routes>
        {/* Shared */}
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetails />} />

        {/* Organizer only */}
        {role === "organizer" && (
          <>
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/participants" element={<Participants />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;