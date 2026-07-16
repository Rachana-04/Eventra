import { useState } from "react";
import { Link } from "react-router-dom";

import API from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token); // save token
      /*localStorage.setItem("userEmail", email);*/
      localStorage.setItem("username", res.data.user.name);
      localStorage.setItem("role", res.data.user.role);

      if (res.data.user.role === "admin") {
  navigate("/admin");
} else {
      navigate("/dashboard");} // redirect to dashboard
    } catch (err) {
  console.log(err);

  if (err.response && err.response.data && err.response.data.msg) {
    setError(err.response.data.msg);
  } else {
    setError("Server error or backend not reachable");
  }
}

     
  };

  return (
    <div className="auth">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p style={{ marginTop: "10px", cursor: "pointer", color: "blue" }}>
         <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
