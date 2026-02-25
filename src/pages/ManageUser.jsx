import React, { useEffect, useState } from "react";
import "../App.css";

function ManageUser() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="page-container">

      <h1 style={{ marginBottom: "40px" }}>Manage Users</h1>

      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <div style={premiumGrid}>
          {users.map(user => (
            <div className="card reveal-on-scroll" style={premiumCard} key={user.id}>
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>

              <button
                className="btn-primary"
                style={{ marginTop: "20px" }}
                onClick={() => handleDelete(user.id)}
              >
                Delete User
              </button>
            </div>
          ))}
        </div>
      )}

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

export default ManageUser;