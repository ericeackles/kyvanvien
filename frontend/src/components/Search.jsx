import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import none from "../assets/none.png";
import "../css/Search.css";

const Search = ({ showSearchBox, setShowSearchBox }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const searchBoxRef = useRef(null);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.trim() === "") {
      setResults(null);
      setNoResults(false);
    } else if (!noResults) {
      fetchData(newQuery);
    }
  };

  const fetchData = async (searchQuery) => {
    if (searchQuery.trim() === "") {
      setResults(null);
      setNoResults(false);
      return;
    }
    setLoading(true);
    const url = `http://localhost:8080/api/v1/stories/search?query=${searchQuery}`;
    try {
      const { data } = await axios.get(url);
      setResults(data);
      setNoResults(data.length === 0);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setShowSearchBox(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSearchBox]);

  useEffect(() => {
    if (showSearchBox && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearchBox]);

  return (
    <>
      <div
        className={`search-box-container ${
          showSearchBox ? "show" : "hide"
        } bg-white p-4 fixed top-0 left-0 w-full z-50`}
      >
        <div ref={searchBoxRef} className="search-box w-full lg:w-1/2 mx-auto">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lightblue-500"
          />
          <div className="search-results">
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
            ) : results && results.length > 0 ? (
              <ul>
                {results.map((story) => (
                  <li
                    key={story.id}
                    onClick={() =>
                      (window.location.href = `/stories/${story.id}`)
                    }
                  >
                    {story.title}
                  </li>
                ))}
              </ul>
            ) : (
              noResults && (
                <ul>
                  <li>No story found</li>
                </ul>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
