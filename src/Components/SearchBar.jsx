import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div
        className="mb-3"
        className="align-items-center justify-content-center py-1"
        style={styles.searchSection}
      >
        <input
          className="form-control"
          placeholder="Search..."
          className="align-self-center px-1 border border-dark border-3"
          style={styles.searchBar}
        />
      </div>
    );
  }
}

const styles = {
  searchBar: {
    width: "80%",
    maxWidth: 600,
  },
};

export default SearchBar;
