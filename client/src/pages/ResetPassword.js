import { useState } from "react";
import API from "../api";

function ResetPassword() {
  const [resetToken, setResetToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!resetToken || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passRegex.test(password)) {
      setError(
        "Password must be 8+ chars, include uppercase, lowercase, number & special char"
      );
      return;
    }

    setError("");

    try {
      const res = await API.post("/auth/reset-password", { resetToken, password });
      setMsg(res.data.msg);
    } catch (err) {
      setError(err.response.data.msg || "Something went wrong");
    }
  };

  return (
    <div className="auth">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {msg && <p style={{ color: "green" }}>{msg}</p>}

        <input
          type="text"
          placeholder="Enter reset token"
          value={resetToken}
          onChange={(e) => setResetToken(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
