import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { useUserContext } from "./UserContext";

const HomePage = () => {
  const { users, loading, error } = useUserContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [theme, setTheme] = useState("light");

  if (loading) return (<img height='90px' width='90px' src="https://www.citypng.com/public/uploads/preview/loading-load-icon-transparent-png-701751695033022vy5stltzj3.png"/>)
  if (error) return <p>Error: {error}</p>;

  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort users based on the selected order
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`container_fluid ${theme}`}>
      <h1>User Directory</h1>
      <div>
        {/* Theme toggle button */}
        <button className="btn btn-outline-secondary" onClick={toggleTheme}>
          <img src="https://www.svgrepo.com/show/309493/dark-theme.svg" height={"50px"} width={"50px"} className="theme-icon" alt="Toggle Theme"/>
        </button>
      </div>
      <div className="controlss">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn btn-outline-primary"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort {sortOrder === "asc" ? "Z-A" : "A-Z"}
        </button>
      </div>

      {/* Display user list */}
      <ul className="user-list">
        {sortedUsers.map((user) => (
          <li key={user.id} className="user-item">
            <Link to={`/user/${user.id}`} className="user-link">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Address: {user.address.city}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
