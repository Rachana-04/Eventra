import { useState } from "react";
import API from "../api";
import "../styles/Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1️⃣ Empty validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    // 2️⃣ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    // 3️⃣ Password validation
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passRegex.test(password)) {
      setError(
        "Password must be 8+ characters and include uppercase, lowercase, number, and special character"
      );
      return;
    }

    // 4️⃣ Confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Registered successfully!");
    } catch (err) {
      setError(err?.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="auth">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Register</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
