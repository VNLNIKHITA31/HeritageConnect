import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Cultural Enthusiast");

  const [showReset, setShowReset] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("reveal");
      });
    });
    elements.forEach(el => observer.observe(el));
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      user =>
        user.email === email &&
        user.password === password &&
        user.role === role
    );

    if (!validUser) {
      alert("Invalid credentials or role mismatch.");
      setShowReset(true);   // SHOW RESET OPTION
      return;
    }

    localStorage.setItem("role", validUser.role);
    localStorage.setItem("email", validUser.email);
    localStorage.setItem("name", validUser.name);

    if (validUser.role === "Admin") navigate("/admin");
    else if (validUser.role === "Content Creator") navigate("/creator");
    else if (validUser.role === "Tour Guide") navigate("/guide");
    else navigate("/profile");
  };

  const handleResetPassword = () => {

    if (!email || !newPassword) {
      alert("Enter email and new password");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex === -1) {
      alert("Email not found. Please register.");
      return;
    }

    users[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Password reset successful! Please login again.");
    setShowReset(false);
    setNewPassword("");
  };

  return (
    <div className="page-container">
      <div
        className="card reveal-on-scroll"
        style={{
          maxWidth: "600px",
          margin: "80px auto",
          padding: "50px",
          borderRadius: "30px"
        }}
      >

        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Welcome Back
        </h1>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={premiumInput}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={premiumInput}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={premiumInput}
        >
          <option>Cultural Enthusiast</option>
          <option>Admin</option>
          <option>Content Creator</option>
          <option>Tour Guide</option>
        </select>

        <button
          className="btn-primary"
          onClick={handleLogin}
          style={{ width: "100%" }}
        >
          Login
        </button>

        {/* RESET PASSWORD SECTION */}
        {showReset && (
          <div style={{ marginTop: "30px" }}>
            <h3 style={{ textAlign: "center" }}>Reset Password</h3>

            <input
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={premiumInput}
            />

            <button
              className="btn-primary"
              onClick={handleResetPassword}
              style={{ width: "100%" }}
            >
              Update Password
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

const premiumInput = {
  width: "100%",
  padding: "16px",
  marginBottom: "25px",
  borderRadius: "18px",
  border: "1px solid #c29b87",
  fontSize: "16px",
  background: "rgba(255,255,255,0.8)"
};

export default Login;