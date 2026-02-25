import React, { useState, useEffect } from "react";
import "../App.css";

function ManageDiscussions() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("discussions")) || [];
    setPosts(storedPosts);
  }, []);

  const deletePost = (id) => {
    const updated = posts.filter(post => post.id !== id);
    setPosts(updated);
    localStorage.setItem("discussions", JSON.stringify(updated));
  };

  const toggleResolved = (id) => {
    const updated = posts.map(post =>
      post.id === id
        ? { ...post, resolved: !post.resolved }
        : post
    );
    setPosts(updated);
    localStorage.setItem("discussions", JSON.stringify(updated));
  };

  return (
    <div className="page-container">

      <h1 style={{ marginBottom: "40px" }}>Moderate Discussions</h1>

      <div style={premiumGrid}>

        {posts.map(post => (
          <div key={post.id} className="card reveal-on-scroll" style={premiumCard}>

            <h3>{post.title}</h3>
            <p><strong>Category:</strong> {post.category}</p>
            <p><strong>Related:</strong> {post.site}</p>
            <p>{post.message}</p>

            <p style={{ marginTop: "10px" }}>
              <strong>Status:</strong>{" "}
              <span style={{
                padding: "6px 14px",
                borderRadius: "20px",
                background: post.resolved ? "#1e423f" : "#a97954",
                color: "white"
              }}>
                {post.resolved ? "Resolved" : "Active"}
              </span>
            </p>

            <div style={{ marginTop: "20px" }}>
              <button
                className="btn-primary"
                style={{ marginRight: "15px" }}
                onClick={() => toggleResolved(post.id)}
              >
                Toggle Status
              </button>

              <button
                className="btn-primary"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

const premiumGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "35px"
};

const premiumCard = {
  padding: "35px",
  borderRadius: "25px"
};

export default ManageDiscussions;