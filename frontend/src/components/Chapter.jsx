import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Chapter.css";

const Chapter = ({ storyId, chapterId }) => {
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/chapters/stories/${storyId}/chapters/${chapterId}`
        );
        setChapter(response.data);
      } catch (error) {
        console.error("Error fetching chapter:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChapter();
  }, [storyId, chapterId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!chapter) {
    return <div className="error">Chapter not found</div>;
  }

  return (
    <div className="chapter-container">
      <h1 className="chapter-title">{chapter.title}</h1>
      <p className="chapter-content">{chapter.content}</p>
    </div>
  );
};

export default Chapter;
