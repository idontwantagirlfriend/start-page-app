import React, { useState, useContext } from "react";
import { nightModeContext } from "../App";

export default function SearchBar(props) {
  const [searchContent, setSearchContent] = useState("");
  const [searchBarId, setSearchBarId] = useState("searchBar");
  const [searchBarWrapperId, setSearchBarWrapperId] =
    useState("searchBar-wrapper");
  const [searchIconId, setSearchIconId] = useState("search-icon");

  const nightClassName = useContext(nightModeContext) ? "night " : "";

  const handleChange = (Event) => {
    Event.preventDefault();
    setSearchContent(Event.target.value);
  };
  const handleSubmit = (Event) => {
    Event.preventDefault();
    window.open(
      `https://cn.bing.com/search?ensearch=1&q=${searchContent}`,
      "_blank"
    );
  };
  const handleSearchBarAcquiresFocus = () => {
    setSearchBarId("searchBar-focus");
    setSearchBarWrapperId("searchBar-wrapper-focus");
    setSearchIconId("search-icon-focus");
    props.onSearchBarAcquiresFocus();
  };
  const handleSearchBarLosesFocus = () => {
    setSearchBarId("searchBar");
    setSearchBarWrapperId("searchBar-wrapper");
    setSearchIconId("search-icon");
    props.onSearchBarLosesFocus();
  };
  const handlePressSlashFocus = (event) => {
    const component = document.getElementById(searchBarId);
    if (event.keyCode === 191 && component !== document.activeElement) {
      event.preventDefault();
      component.focus();
    }
  };
  document.addEventListener("keydown", handlePressSlashFocus);

  return (
    <div className="py-1">
      <form className="container-fluid" onSubmit={handleSubmit}>
        <div
          className={`row gx-2 rounded-pill align-items-center flex-nowrap ${nightClassName}`}
          id={searchBarWrapperId}
        >
          <input
            className={`col border-primary border-2 form-control rounded-pill flex-grow-1 ${nightClassName}`}
            id={searchBarId}
            placeholder="Search..."
            onChange={handleChange}
            onFocus={handleSearchBarAcquiresFocus}
            onBlur={handleSearchBarLosesFocus}
          />
          <div className="col-1 flex-shrink-0" id={searchIconId}>
            <span>
              <i
                className="bi bi-search fs-4"
                style={{ fontColor: "inherit" }}
              ></i>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
