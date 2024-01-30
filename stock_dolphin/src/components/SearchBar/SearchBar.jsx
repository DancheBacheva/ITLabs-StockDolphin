import React from 'react'
import "./SearchBar.css"

export const SearchBar = ({placeholderText}) => {
  return (
    <div>
      <label className="search-label" for="search">
          <img className="search-img" src="/images/Search.png" alt="Search" />
          <input
            className="input-search"
            type="text"
            id="search"
            name="search"
            placeholder={placeholderText}
          />
        </label>
    </div>
  )
}
