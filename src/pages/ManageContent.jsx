import React, { useState, useEffect } from "react";
import "../App.css";

function ManageContent() {

  const [contents, setContents] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Monument");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("contents")) || [];
    setContents(stored);
  }, []);

  const addContent = () => {
    if (!title || !state || !description) return;

    const newItem = {
      id: Date.now(),
      title,
      category,
      state,
      description
    };

    const updated = [...contents, newItem];
    setContents(updated);
    localStorage.setItem("contents", JSON.stringify(updated));

    setTitle("");
    setState("");
    setDescription("");
  };

  const deleteContent = (id) => {
    const updated = contents.filter(item => item.id !== id);
    setContents(updated);
    localStorage.setItem("contents", JSON.stringify(updated));
  };

  return (
    <div className="page-container">

      <h1 style={{ marginBottom: "40px" }}>Manage Cultural Content</h1>

      <div className="card reveal-on-scroll" style={formCard}>

        <input placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} style={premiumInput} />
        <select value={category} onChange={(e)=>setCategory(e.target.value)} style={premiumInput}>
          <option>Monument</option>
          <option>Art</option>
          <option>Music</option>
          <option>Food</option>
          <option>Dance</option>
        </select>
        <input placeholder="State" value={state} onChange={(e)=>setState(e.target.value)} style={premiumInput} />
        <textarea placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} style={premiumInput} />

        <button className="btn-primary" onClick={addContent}>
          Add Content
        </button>

      </div>

      <div style={{ ...premiumGrid, marginTop: "50px" }}>
        {contents.map(item => (
          <div key={item.id} className="card reveal-on-scroll" style={premiumCard}>
            <h3>{item.title}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>State:</strong> {item.state}</p>
            <p>{item.description}</p>

            <button className="btn-primary" onClick={()=>deleteContent(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

const premiumInput = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "15px",
  border: "1px solid #c29b87"
};

const formCard = {
  maxWidth: "650px",
  margin: "0 auto",
  padding: "40px",
  borderRadius: "25px"
};

const premiumGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px"
};

const premiumCard = {
  padding: "30px",
  borderRadius: "25px"
};

export default ManageContent;