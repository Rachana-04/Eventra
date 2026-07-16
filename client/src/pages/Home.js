import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <h1>Eventra</h1>
        <p>Plan • Organize • Participate</p>

        <div className="buttons">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
