import React from "react";

class SearchBar extends React.Component {
  state = {
    searchContent: "",
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
  render() {
    return (
      <div className="py-1">
        <form className="container-fluid" onSubmit={this.handleSubmit}>
          <div
            className="row gx-0 border border-primary border-3 rounded-pill align-items-center flex-nowrap"
            id="searchBar-wrapper"
          >
            <input
              className="col-1 border-light form-control rounded-pill flex-grow-1"
              id="searchBar"
              placeholder="Search..."
              onChange={this.handleChange}
            />
            <div className="col-1 flex-shrink-0">
              <span className="px-2">
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
