import { useState } from "react";
import { Link } from "react-router-dom";

import API from "../api";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      const res = await API.post("/auth/forgot-password", { email });
      setMsg(`Reset token: ${res.data.resetToken}`);
      setError("");
    } catch (err) {
      setError(err.response.data.msg || "Something went wrong");
      setMsg("");
    }
  };

  return (
    <div className="auth">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {msg && <p style={{ color: "green" }}>{msg}</p>}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Token</button>
        <p>
  Got a token? <Link to="/reset-password">Reset Password</Link>
</p>

      </form>
    </div>
  );
}

export default ForgotPassword;
