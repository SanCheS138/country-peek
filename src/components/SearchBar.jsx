// SearchBar.jsx
import React from "react";

function SearchBar({ query, onQueryChange }) {
  return (
    // 2. render a div.search-bar containing a controlled input
    <div className="search-bar">
      <input
        type="text"
        value={query} // value bound to query
        onChange={(e) => onQueryChange(e.target.value)} // onChange calls setter
        placeholder="Search for a country..." // placeholder text
        aria-label="Search for a country" // accessibility
      />
    </div>
  );
}

export default SearchBar;
