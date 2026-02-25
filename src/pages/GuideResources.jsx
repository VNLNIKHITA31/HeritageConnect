import React, { useState, useEffect } from "react";
import "../App.css";

function GuideResources() {

  const [resources, setResources] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("guideResources")) || [];
    setResources(stored);
  }, []);

  const handleAdd = () => {
    if (!title || !link) return;

    const newResource = {
      id: Date.now(),
      title,
      link,
      description
    };

    const updated = [...resources, newResource];
    setResources(updated);
    localStorage.setItem("guideResources", JSON.stringify(updated));

    setTitle("");
    setLink("");
    setDescription("");
  };

  return (
    <div className="page-container">
      <h1>Upload Educational Resources</h1>

      <div className="card">

        <input
          placeholder="Resource Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Resource Link (Google Drive / PDF / Website)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <textarea
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="btn-primary" onClick={handleAdd}>
          Add Resource
        </button>

      </div>

      <div className="cards-container">
        {resources.map(resource => (
          <div key={resource.id} className="card">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#1e423f", fontWeight: "bold" }}
            >
              View Resource
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}

export default GuideResources;