import React, { useState } from "react";
import "./Search.css";
const Search = ({ setQuery }) => {
  return (
    <>
      <div className="search-container">
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={(e) => setQuery(e.target.value)}
          ></textarea>
          <label for="floatingTextarea">Search...</label>
        </div>
      </div>
    </>
  );
};

export default Search;
