import React, { useState, useEffect } from "react";
import "../App.css";

function CreatorContent() {

  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [category, setCategory] = useState("Monument");

  const [formData, setFormData] = useState({
    title: "",
    state: "",
    type: "",
    description: "",
    image: "",
    rating: "",
    visitedDate: ""
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("creatorContent")) || [];
    setItems(stored);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {

    if (!formData.title || !formData.state) {
      alert("Please fill required fields");
      return;
    }

    const newItem = {
      ...formData,
      category,
      id: editingId ? editingId : Date.now()
    };

    let updated;

    if (editingId) {
      updated = items.map(item =>
        item.id === editingId ? newItem : item
      );
      setEditingId(null);
    } else {
      updated = [...items, newItem];
    }

    setItems(updated);
    localStorage.setItem("creatorContent", JSON.stringify(updated));

    setFormData({
      title: "",
      state: "",
      type: "",
      description: "",
      image: "",
      rating: "",
      visitedDate: ""
    });
  };

  const handleEdit = (item) => {
    setFormData(item);
    setCategory(item.category);
    setEditingId(item.id);
  };

  const handleDelete = (id) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    localStorage.setItem("creatorContent", JSON.stringify(updated));
  };

  return (
    <div className="page-container">

      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Content Creator Studio
      </h1>

      {/* CATEGORY SELECT */}
      <div className="card" style={{ maxWidth: "750px", margin: "0 auto 40px auto" }}>
        <label><strong>Select Category</strong></label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Monument</option>
          <option>Food Culture</option>
          <option>Dance Forms</option>
          <option>Music</option>
          <option>Paintings</option>
        </select>
      </div>

      {/* FORM */}
      <div className="card" style={{ maxWidth: "750px", margin: "0 auto" }}>

        <input
          name="title"
          placeholder={`${category} Name`}
          value={formData.title}
          onChange={handleChange}
        />

        <input
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />

        {category === "Monument" && (
          <>
            <input
              name="type"
              placeholder="Type (Temple, Fort, etc.)"
              value={formData.type}
              onChange={handleChange}
            />
            <input
              type="date"
              name="visitedDate"
              value={formData.visitedDate}
              onChange={handleChange}
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              value={formData.rating}
              onChange={handleChange}
            />
          </>
        )}

        {category !== "Monument" && (
          <input
            name="type"
            placeholder="Style / Tradition / Genre"
            value={formData.type}
            onChange={handleChange}
          />
        )}

        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        />

        <button className="btn-primary" onClick={handleSubmit}>
          {editingId ? "Update Content" : "Add Content"}
        </button>

      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "40px",
        marginTop: "70px"
      }}>
        {items.map((item) => (
          <div key={item.id} className="card">

            <h3>{item.title}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>State:</strong> {item.state}</p>
            {item.type && <p><strong>Type:</strong> {item.type}</p>}
            {item.rating && <p><strong>Rating:</strong> ⭐ {item.rating}</p>}
            {item.visitedDate && <p><strong>Visited:</strong> {item.visitedDate}</p>}

            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  marginTop: "15px"
                }}
              />
            )}

            <p style={{ marginTop: "15px" }}>{item.description}</p>

            <div style={{ marginTop: "20px" }}>
              <button
                className="btn-primary"
                onClick={() => handleEdit(item)}
                style={{ marginRight: "15px" }}
              >
                Edit
              </button>

              <button
                className="btn-primary"
                onClick={() => handleDelete(item.id)}
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

export default CreatorContent;