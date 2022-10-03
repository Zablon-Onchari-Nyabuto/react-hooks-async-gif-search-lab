import React, { useState } from "react";

function GifSearch({ onSubmitSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitSearch(search);
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="search">Enter a Search Term:</label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Find Gifs
        </button>
      </form>
    </div>
  );
}

export default GifSearch;