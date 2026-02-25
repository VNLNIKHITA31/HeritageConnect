import React, { useState, useEffect } from "react";
import "../App.css";

function GuideSessions() {

  const [sessions, setSessions] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("guideSessions")) || [];
    setSessions(stored);
  }, []);

  const addSession = () => {
    if (!title || !date) return;

    const newSession = {
      id: Date.now(),
      title,
      date
    };

    const updated = [...sessions, newSession];
    setSessions(updated);
    localStorage.setItem("guideSessions", JSON.stringify(updated));

    setTitle("");
    setDate("");
  };

  return (
    <div className="page-container">
      <h1>Schedule Guided Sessions</h1>

      <div className="card">
        <input
          placeholder="Session Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="btn-primary" onClick={addSession}>
          Schedule
        </button>
      </div>

      {sessions.map(session => (
        <div key={session.id} className="card">
          <h3>{session.title}</h3>
          <p>Date: {session.date}</p>
        </div>
      ))}
    </div>
  );
}

export default GuideSessions;