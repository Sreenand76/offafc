import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery); // Trigger search on parent component
    }
  };

  return (
    <div className=" flex items-center">
      <input
        type="text"
        placeholder="Search by product name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border rounded p-2 w-72 h-11 md:w-80 border-gray-300"
      />
      <button
        onClick={handleSearch}
        className="ml-1 px-4 py-3 theme-color text-white rounded"
      >
        <FaSearch/>
      </button>
    </div>
  );
};

export default SearchBar;



