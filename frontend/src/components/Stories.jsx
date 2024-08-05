import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Stories.css";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 30;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/api/v1/stories"
        );
        setStories(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleTitleClick = (id) => {
    window.location.href = `/stories/${id}`;
  };

  return (
    <div className="stories-container">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10em",
          }}
        >
          Loading...
        </div>
      ) : currentStories.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {currentStories.map((story) => (
              <div key={story.id} className="story-card">
                <img
                  src={story.storyImg}
                  alt={story.title}
                  className="story-image"
                />
                <h3
                  onClick={() => handleTitleClick(story.id)}
                  style={{ cursor: "pointer" }}
                >
                  {story.title}
                </h3>
                <p>{story.author}</p>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(stories.length / storiesPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className="page-button"
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "4em",
            flexDirection: "column",
          }}
        >
          <p className="text-center" style={{ marginBottom: "4em" }}>
            No stories found
          </p>
        </div>
      )}
    </div>
  );
};

export default Stories;
