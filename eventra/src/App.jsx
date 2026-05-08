import { useEffect } from "react";

import {
  Routes,
  Route,
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

  // Get saved role
  const role = localStorage.getItem("role");

  // Add role to body
  useEffect(() => {

    if (role) {
      document.body.setAttribute(
        "data-role",
        role
      );
    }

  }, [role]);

  // FIRST VISIT → show role popup
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

      {/* NAVBAR */}
      <Navbar role={role} />

      {/* PAGE CONTENT */}
      <div style={{ flex: 1 }}>

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* EVENT DETAILS */}
          <Route
            path="/event/:id"
            element={<EventDetails />}
          />

          {/* ORGANIZER ROUTES */}
          {role === "organizer" && (
            <>
              <Route
                path="/create"
                element={<CreateEvent />}
              />

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              <Route
                path="/participants"
                element={<Participants />}
              />
            </>
          )}

          {/* FALLBACK ROUTE */}
          <Route
            path="*"
            element={<Home />}
          />

        </Routes>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;