import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Profile() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");

    if (email && role) setUser({ email, role });
    else navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="page-container">

      <div
        className="card reveal-on-scroll"
        style={{
          width: "650px",
          margin: "80px auto",
          padding: "60px",
          borderRadius: "30px",
          textAlign: "center"
        }}
      >

        <div style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background: "linear-gradient(135deg,#a97954,#532c2e)",
          color: "white",
          fontSize: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 30px"
        }}>
          {user.email.charAt(0).toUpperCase()}
        </div>

        <h2>Welcome Back</h2>
        <p style={{ marginTop: "15px" }}>
          <strong>Email:</strong> {user.email}
        </p>

        <div style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "30px",
          background: "#532c2e",
          color: "white"
        }}>
          {user.role}
        </div>

        {/* Cultural Dashboard Buttons */}
        {user.role === "Cultural Enthusiast" && (
          <div style={{ marginTop: "40px" }}>

            <button className="btn-primary"
              onClick={() => navigate("/my-journey")}>
              My Journey
            </button>

            <button className="btn-primary"
              style={{ marginLeft: "10px" }}
              onClick={() => navigate("/favorites")}>
              Favorites
            </button>

            <button className="btn-primary"
              style={{ marginLeft: "10px" }}
              onClick={() => navigate("/wishlist")}>
              Wishlist
            </button>

            <button className="btn-primary"
              style={{ marginLeft: "10px" }}
              onClick={() => navigate("/achievements")}>
              Achievements
            </button>

          </div>
        )}

        <div style={{ marginTop: "40px" }}>
          <button className="btn-primary"
            onClick={() => navigate("/")}>
            Explore
          </button>

          <button
            className="btn-primary"
            style={{ marginLeft: "20px" }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;