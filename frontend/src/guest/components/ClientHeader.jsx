import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaSun, FaMoon, FaUser } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientHeader = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hoveredResult, setHoveredResult] = useState(null);
  const [genres, setGenres] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/stories/search?query=${query}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleKeyUp = (e) => {
    setQuery(e.target.value);
    handleSearch();
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    return navigate(() => {
      setResults([]);
    });
  }, [navigate]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/genre");
        setGenres(response.data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/auth/check"
        );
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <header className="header d-none d-lg-block" style={{ height: "100px" }}>
        <nav className="navbar navbar-expand-lg navbar-dark header__navbar">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="/assets/img/logo_text.png"
                alt="Logo Ky Vien"
                className="img-fluid"
                style={{ width: "200px" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ justifyContent: "center" }}
            >
              <form
                className="d-flex header__form-search"
                onSubmit={(e) => e.preventDefault()}
                style={{
                  width: "75%",
                  marginLeft: "auto",
                  position: "relative",
                }}
                ref={dropdownRef}
              >
                <input
                  className="form-control search-story"
                  type="text"
                  placeholder="Tìm truyện, thể loại etc..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={handleKeyUp}
                  style={{ width: "100%" }}
                />
                <button className="btn" type="submit">
                  <FaSearch />
                </button>
                <div className="dropdown ms-2">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="genreDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Genres
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="genreDropdown">
                    {genres.map((genre) => (
                      <li key={genre.genreId}>
                        <Link
                          to={`/category/${genre.slug}`}
                          className="dropdown-item"
                        >
                          {genre.genreName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {query && (
                  <div
                    className="search-results"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      width: "100%",
                      backgroundColor: "white",
                      border: "1px solid black",
                      borderRadius: "5px",
                      zIndex: 1000,
                    }}
                  >
                    <ul
                      style={{ listStyleType: "none", padding: 0, margin: 0 }}
                    >
                      {results.length > 0 ? (
                        results.slice(0, 5).map((result) => (
                          <li
                            key={result.id}
                            style={{
                              borderBottom: "1px solid black",
                              padding: "10px",
                              position: "relative",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            onMouseEnter={() => setHoveredResult(result)}
                            onMouseLeave={() => setHoveredResult(null)}
                          >
                            <Link
                              to={`/truyen/${result.slug}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              {result.title}
                            </Link>
                            <span>{`- ${result.author}`}</span>
                          </li>
                        ))
                      ) : (
                        <li style={{ padding: "10px", color: "black" }}>
                          No results found
                        </li>
                      )}
                      {results.length > 5 && (
                        <li style={{ padding: "10px" }}>
                          <Link
                            to={`/search?query=${query}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            View more...
                          </Link>
                        </li>
                      )}
                    </ul>
                    {hoveredResult && (
                      <div
                        className="hover-card"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: "calc(100% + 10px)",
                          width: "200px",
                          backgroundColor: "white",
                          border: "1px solid black",
                          borderRadius: "5px",
                          padding: "0",
                          zIndex: 1001,
                        }}
                      >
                        <img
                          src={hoveredResult.storyImg}
                          alt={hoveredResult.title}
                          style={{ width: "100%", borderRadius: "5px 5px 0 0" }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </form>

              <div className="form-check form-switch d-flex align-items-center ms-auto">
                <label className="form-check-label">
                  <FaSun style={{ fill: "#fff" }} />
                </label>
                <input
                  className="form-check-input theme_mode"
                  type="checkbox"
                  style={{
                    transform: "scale(1.3)",
                    marginLeft: "12px",
                    marginRight: "12px",
                  }}
                />
                <label className="form-check-label">
                  <FaMoon style={{ fill: "#fff" }} />
                </label>
              </div>

              <div className="ms-3">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="accountDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUser />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="accountDropdown"
                  >
                    {isAuthenticated ? (
                      <>
                        <li>
                          <Link to="/account" className="dropdown-item">
                            My Account
                          </Link>
                        </li>
                        <li>
                          <Link to="/logout" className="dropdown-item">
                            Logout
                          </Link>
                        </li>
                      </>
                    ) : (
                      <li>
                        <Link to="/account" className="dropdown-item">
                          Login / Register
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default ClientHeader;
