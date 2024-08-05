import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/story.css";

const Story = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/stories/${id}`
        );
        setStory(response.data);
      } catch (error) {
        console.error("Error fetching story:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchChapters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/stories/${id}/chapters`
        );
        setChapters(response.data);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchStory();
    fetchChapters();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!story) {
    return <div className="error">Story not found</div>;
  }

  return (
    <div className="story-container">
      <div className="story-content">
        <div className="story-details">
          <img src={story.storyImg} alt={story.title} className="story-cover" />
          <div className="story-info">
            <h1 className="story-title">{story.title}</h1>
            {story.statusName && (
              <p className="story-status">Status: {story.statusName}</p>
            )}
            {story.genreName && (
              <p className="story-genre">Genre: {story.genreName}</p>
            )}
            <p className="story-author">Author: {story.author}</p>
            <p className="story-user">Uploader: {story.userName}</p>
          </div>
        </div>
        <div className="story-description-box">
          <p className="story-description">{story.description}</p>
        </div>
        <div className="chapter-list">
          <h2>Chapters</h2>
          <ul>
            {chapters.map((chapter) => (
              <li key={chapter.id}>{chapter.title}</li>
            ))}
          </ul>
        </div>
        <div className="related-stories">
          <h2>Related Stories</h2>
          {/* Render related stories here */}
        </div>
      </div>
    </div>
  );
};

export default Story;
