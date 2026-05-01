import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("create")}>Create</button>
      </div>

      {page === "home" && <Home />}
      {page === "create" && <CreateEvent />}
    </div>
  );
}

export default App;