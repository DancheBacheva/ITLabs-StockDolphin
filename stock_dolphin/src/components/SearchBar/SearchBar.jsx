import React, {useState} from 'react'
import "./SearchBar.css"

export const SearchBar = ({placeholderText, data, setData}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredData = data.filter((item)=>
    item.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);

  }
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
            onChange={handleSearch}
          />
        </label>
    </div>
  )
}
