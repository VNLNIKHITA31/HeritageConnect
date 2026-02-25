import React, { useState, useEffect } from "react";
import "../App.css";

function GuideInsights() {

  const [insights, setInsights] = useState([]);
  const [monument, setMonument] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("guideInsights")) || [];
    setInsights(stored);
  }, []);

  const handleAdd = () => {
    if (!monument || !content) return;

    const newInsight = {
      id: Date.now(),
      monument,
      content
    };

    const updated = [...insights, newInsight];
    setInsights(updated);
    localStorage.setItem("guideInsights", JSON.stringify(updated));

    setMonument("");
    setContent("");
  };

  return (
    <div className="page-container">

      <h1>Tour Insights Management</h1>

      <div className="card">
        <input
          placeholder="Monument Name"
          value={monument}
          onChange={(e) => setMonument(e.target.value)}
        />

        <textarea
          placeholder="Detailed Explanation"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="btn-primary" onClick={handleAdd}>
          Add Insight
        </button>
      </div>

      {insights.map(item => (
        <div key={item.id} className="card">
          <h3>{item.monument}</h3>
          <p>{item.content}</p>
        </div>
      ))}

    </div>
  );
}

export default GuideInsights;