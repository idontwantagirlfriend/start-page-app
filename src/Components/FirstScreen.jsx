import React from "react";
import SearchBar from "./SearchBar";
import Action from "./Action";

class FirstScreen extends React.Component {
  render() {
    return (
      <div className="container p-0">
        <div className="row border border-2 border-primary">
          <SearchBar />
        </div>
        <div className="row border border-2 border-primary">
          <Action />
        </div>
      </div>
    );
  }
}

export default FirstScreen;
