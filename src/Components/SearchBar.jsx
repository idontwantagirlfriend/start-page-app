import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchContent: "",
    searchBarId: "searchBar",
    searchBarWrapperId: "searchBar-wrapper",
    searchIconId: "search-icon",
  };
  handleChange = (Event) => {
    Event.preventDefault();
    const newState = { ...this.state };
    newState.searchContent = Event.target.value;
    this.setState(newState);
  };
  handleSubmit = (Event) => {
    Event.preventDefault();
    const searchContent = this.state.searchContent;
    const searchUrl =
      "https://cn.bing.com/search?ensearch=1&q=" + searchContent;
    console.log(searchUrl);
    window.open(searchUrl, "_blank");
  };
  handleSearchBarAcquiresFocus = () => {
    const newState = { ...this.state };
    newState.searchBarId = "searchBar-focus";
    newState.searchBarWrapperId = "searchBar-wrapper-focus";
    newState.searchIconId = "search-icon-focus";
    this.setState(newState);
    this.props.onSearchBarAcquiresFocus();
  };
  handleSearchBarLosesFocus = () => {
    const newState = { ...this.state };
    newState.searchBarId = "searchBar";
    newState.searchBarWrapperId = "searchBar-wrapper";
    newState.searchIconId = "search-icon";
    this.setState(newState);
    this.props.onSearchBarLosesFocus();
  };
  render() {
    const nightModeIsOn = this.props.nightModeIsOn;
    const nightClassName = nightModeIsOn ? "night " : "";
    const searchBarId = this.state.searchBarId;
    const searchBarWrapperId = this.state.searchBarWrapperId;
    const searchIconId = this.state.searchIconId;
    return (
      <div className="py-1">
        <form className="container-fluid" onSubmit={this.handleSubmit}>
          <div
            className={`row gx-2 rounded-pill align-items-center flex-nowrap ${nightClassName}`}
            id={searchBarWrapperId}
          >
            <input
              className={`col border-primary border-2 form-control rounded-pill flex-grow-1 ${nightClassName}`}
              id={searchBarId}
              placeholder="Search..."
              onChange={this.handleChange}
              onFocus={this.handleSearchBarAcquiresFocus}
              onBlur={this.handleSearchBarLosesFocus}
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
}
export default SearchBar;
