import React, { useState, useEffect } from "react";
import "../App.css";

function GuideProfile() {

  const [profile, setProfile] = useState({
    name: "",
    specialization: "",
    experience: "",
    bio: ""
  });

  const [editMode, setEditMode] = useState(true);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("guideProfile"));
    if (stored) {
      setProfile(stored);
      setEditMode(false); // show profile if already saved
    }
  }, []);

  const handleSave = () => {
    if (!profile.name || !profile.specialization) return;

    localStorage.setItem("guideProfile", JSON.stringify(profile));
    setEditMode(false);
  };

  return (
    <div className="page-container">

      <h1>Guide Profile</h1>

      {editMode ? (
        /* ================= EDIT MODE ================= */
        <div className="card" style={{ maxWidth: "700px", margin: "40px auto" }}>

          <input
            placeholder="Full Name"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
          />

          <input
            placeholder="Specialization (e.g., Mughal Architecture)"
            value={profile.specialization}
            onChange={(e) =>
              setProfile({ ...profile, specialization: e.target.value })
            }
          />

          <input
            placeholder="Years of Experience"
            value={profile.experience}
            onChange={(e) =>
              setProfile({ ...profile, experience: e.target.value })
            }
          />

          <textarea
            placeholder="Professional Bio"
            rows="4"
            value={profile.bio}
            onChange={(e) =>
              setProfile({ ...profile, bio: e.target.value })
            }
          />

          <button
            className="btn-primary"
            style={{ marginTop: "20px" }}
            onClick={handleSave}
          >
            Save Profile
          </button>

        </div>

      ) : (
        /* ================= VIEW MODE ================= */
        <div className="card" style={{
          maxWidth: "750px",
          margin: "40px auto",
          textAlign: "center",
          padding: "50px"
        }}>

          <div style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "#1e423f",
            color: "white",
            fontSize: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 25px auto"
          }}>
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <h2>{profile.name}</h2>

          <p style={{ marginTop: "10px", fontWeight: "600" }}>
            Specialization: {profile.specialization}
          </p>

          <p style={{ marginTop: "10px" }}>
            Experience: {profile.experience}
          </p>

          <p style={{
            marginTop: "20px",
            lineHeight: "1.7",
            fontStyle: "italic"
          }}>
            {profile.bio}
          </p>

          <button
            className="btn-primary"
            style={{ marginTop: "30px" }}
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>

        </div>
      )}

    </div>
  );
}

export default GuideProfile;