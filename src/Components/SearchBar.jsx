import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchContent: "",
    searchBarId: "searchBar",
    searchBarWrapperId: "searchBar-wrapper",
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
    this.setState(newState);
    console.log(
      `The searchbar has acquired focus and now its id becomes "${this.state.searchBarId}".
      The searchbar wrapper has acquired focus and now its id becomes "${this.state.searchBarWrapperId}".`
    );
  };
  handleSearchBarLosesFocus = () => {
    const newState = { ...this.state };
    newState.searchBarId = "searchBar";
    newState.searchBarWrapperId = "searchBar-wrapper";
    this.setState(newState);
    console.log(
      `The searchbar has lost focus and now its id becomes "${this.state.searchBarId}".
      The searchbar wrapper has lost focus and now its id becomes "${this.state.searchBarWrapperId}".`
    );
  };
  render() {
    const searchBarId = this.state.searchBarId;
    const searchBarWrapperId = this.state.searchBarWrapperId;
    return (
      <div className="py-1">
        <form className="container-fluid" onSubmit={this.handleSubmit}>
          <div
            className="row gx-2 border border-primary border-4 rounded-pill align-items-center flex-nowrap"
            id={searchBarWrapperId}
          >
            <input
              className="col border-light form-control rounded-pill flex-grow-1"
              id={searchBarId}
              placeholder="Search..."
              onChange={this.handleChange}
              onFocus={this.handleSearchBarAcquiresFocus}
              onBlur={this.handleSearchBarLosesFocus}
            />
            <div className="col-1 flex-shrink-0">
              <span>
                <i class="bi bi-search text-black"></i>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
