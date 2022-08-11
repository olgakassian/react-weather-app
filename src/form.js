import React from "react";

export default function Form() {
  return (
    <form action="submit">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control search-input"
          />
        </div>

        <div className="col-3 p-0">
          <input
            type="submit"
            className="btn btn-primary w-100 search-btn"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
}