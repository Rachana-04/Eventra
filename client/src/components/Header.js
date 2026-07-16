import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="left">
        <h3>College Events</h3>

        {role === "user" && (
          <>
            <span onClick={() => navigate("/dashboard")}>Dashboard</span>
            <span onClick={() => navigate("/create")}>Create Event</span>
            <span onClick={() => navigate("/wallet")}>Wallet</span>
            <span onClick={() => navigate("/notifications")}>🔔</span>
            


          </>
        )}

        {role === "admin" && (
          <>
            <span onClick={() => navigate("/admin")}>Admin Panel</span>
            <span>🔔</span>
          </>
        )}
      </div>

      <div className="right">
        <span className="username">{username}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
