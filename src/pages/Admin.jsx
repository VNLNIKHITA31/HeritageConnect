import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Admin() {

  const navigate = useNavigate();

  const [userCount, setUserCount] = useState(0);
  const [contentCount, setContentCount] = useState(0);
  const [discussionCount, setDiscussionCount] = useState(0);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const contents = JSON.parse(localStorage.getItem("contents")) || [];
    const discussions = JSON.parse(localStorage.getItem("discussions")) || [];

    setUserCount(users.length);
    setContentCount(contents.length);
    setDiscussionCount(discussions.length);
  }, []);

  return (
    <div className="page-container">

      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Admin Control Center
      </h1>

      {/* Stats Grid */}
      <div style={premiumGrid}>

        <StatCard title="Total Users" value={userCount} />
        <StatCard title="Cultural Content" value={contentCount} />
        <StatCard title="Total Discussions" value={discussionCount} />

      </div>

      {/* Management Section */}
      <div style={{ ...premiumGrid, marginTop: "60px" }}>

        <ActionCard
          title="Manage Users"
          desc="View, edit and remove registered users."
          onClick={() => navigate("/admin/users")}
        />

        <ActionCard
          title="Manage Cultural Content"
          desc="Update monuments, art, food and music content."
          onClick={() => navigate("/admin/content")}
        />

        <ActionCard
          title="Moderate Discussions"
          desc="Review and manage user discussions."
          onClick={() => navigate("/admin/discussions")}
        />

      </div>

    </div>
  );
}

const premiumGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "40px"
};

function StatCard({ title, value }) {
  return (
    <div className="card reveal-on-scroll" style={premiumCard}>
      <h3>{title}</h3>
      <p style={{ fontSize: "40px", marginTop: "20px" }}>{value}</p>
    </div>
  );
}

function ActionCard({ title, desc, onClick }) {
  return (
    <div
      className="card reveal-on-scroll"
      style={{ ...premiumCard, cursor: "pointer" }}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p style={{ marginTop: "15px" }}>{desc}</p>
    </div>
  );
}

const premiumCard = {
  padding: "40px",
  borderRadius: "25px",
  textAlign: "center"
};

export default Admin;