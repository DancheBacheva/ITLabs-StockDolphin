import React, { useState, useEffect } from "react";
import "./SearchBar.css";

export const SearchBar = ({ placeholderText, data, setData, name }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item[name].toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(filteredData);
  }, [searchQuery, data, name, setData]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <div>
      <label className="search-label" htmlFor="search">
        <img className="search-img" src="/images/Search.png" alt="Search" />
        <input
          className="input-search"
          type="text"
          id="search"
          name="search"
          value={searchQuery}
          placeholder={placeholderText}
          onChange={handleSearch}
        />
      </label>
    </div>
  );
};
