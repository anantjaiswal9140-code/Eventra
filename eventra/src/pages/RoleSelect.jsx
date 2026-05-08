import "../styles/roleselect.css";

function RoleSelect() {

  const chooseRole = (role) => {
    localStorage.setItem("role", role);
    window.location.reload();
  };

  return (
    <div className="role-overlay">

      <div className="role-modal">

        <h1>Welcome to Eventra</h1>

        <p>Select how you want to continue</p>

        <div className="role-buttons">

          <button onClick={() => chooseRole("participant")}>
            Participant
          </button>

          <button onClick={() => chooseRole("organizer")}>
            Organizer
          </button>

        </div>

      </div>

    </div>
  );
}

export default RoleSelect;