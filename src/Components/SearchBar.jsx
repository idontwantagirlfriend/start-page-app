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
      <div
        className="mb-3"
        className="align-items-center justify-content-center py-1"
        style={styles.searchSection}
      >
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            placeholder="Search..."
            className="align-self-center px-3 border border-dark border-3 rounded-pill"
            onChange={this.handleChange}
            style={styles.searchBar}
          />
        </form>
      </div>
    );
  }
}

const styles = {
  searchBar: {
    width: "80%",
    maxWidth: 600,
    height: 60,
  },
};

export default SearchBar;
