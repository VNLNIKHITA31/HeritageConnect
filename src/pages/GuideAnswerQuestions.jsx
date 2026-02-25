import React, { useEffect, useState } from "react";
import "../App.css";

function GuideAnswerQuestions() {

  const [posts, setPosts] = useState([]);
  const [replyText, setReplyText] = useState({});

  const loadDiscussions = () => {
    const stored = JSON.parse(localStorage.getItem("discussions")) || [];
    setPosts(stored);
  };

  useEffect(() => {
    loadDiscussions();

    // Listen for changes
    const handleStorage = () => {
      loadDiscussions();
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const handleReply = (id) => {
    if (!replyText[id]) return;

    const updatedPosts = posts.map(post =>
      post.id === id
        ? {
            ...post,
            guideReply: replyText[id],
            answeredByGuide: true
          }
        : post
    );

    setPosts(updatedPosts);
    localStorage.setItem("discussions", JSON.stringify(updatedPosts));
    setReplyText({ ...replyText, [id]: "" });
  };

  return (
    <div className="page-container">
      <h1>Answer Cultural Questions</h1>

      {posts.length === 0 && (
        <div className="card" style={{ textAlign: "center" }}>
          <h3>📭 No visitor questions yet</h3>
          <p>When users post discussions, they will appear here.</p>
        </div>
      )}

      <div className="cards-container">
        {posts.map(post => (
          <div key={post.id} className="card">

            <h3>{post.title}</h3>
            <p><strong>Category:</strong> {post.category}</p>
            <p><strong>Related To:</strong> {post.site}</p>
            <p>{post.message}</p>

            {post.guideReply ? (
              <div style={{
                background: "#1e423f",
                color: "white",
                padding: "15px",
                borderRadius: "12px",
                marginTop: "15px"
              }}>
                <strong>Guide Response:</strong>
                <p style={{ marginTop: "8px" }}>{post.guideReply}</p>
              </div>
            ) : (
              <>
                <textarea
                  placeholder="Write official guide response..."
                  value={replyText[post.id] || ""}
                  onChange={(e) =>
                    setReplyText({
                      ...replyText,
                      [post.id]: e.target.value
                    })
                  }
                  style={{ marginTop: "15px" }}
                />

                <button
                  className="btn-primary"
                  style={{ marginTop: "10px" }}
                  onClick={() => handleReply(post.id)}
                >
                  Submit Response
                </button>
              </>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}

export default GuideAnswerQuestions;