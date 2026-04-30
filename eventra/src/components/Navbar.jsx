import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Eventra</h2>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Create</a>
        <a href="#">Dashboard</a>
      </div>
    </nav>
  );
}

export default Navbar;