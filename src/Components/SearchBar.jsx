import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="mb-3" style={styles.searchSection}>
        <input
          className="form-control"
          placeholder="Search..."
          className="align-self-center"
          style={styles.searchBar}
        />
      </div>
    );
  }
}

const styles = {
  searchSection: {
    alignItems: "center",
    padding: 10,
    paddingTop: 100,
    justifyContent: "center",
  },
  searchBar: {
    width: "60%",
    maxWidth: 400,
    padding: 10,
    border: "5px solid black",
  },
};

export default SearchBar;
