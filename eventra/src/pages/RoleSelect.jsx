import "../styles/role.css";

function RoleSelect() {
  const selectRole = (role) => {
    localStorage.setItem("role", role);
    window.location.reload();
  };

  return (
    <div className="role-container">
      <h1>Eventra</h1>
      <p>Select how you want to continue</p>

      <div className="role-buttons">
        <button onClick={() => selectRole("organizer")}>
          Organizer
        </button>

        <button onClick={() => selectRole("participant")}>
          Participant
        </button>
      </div>
    </div>
  );
}

export default RoleSelect;