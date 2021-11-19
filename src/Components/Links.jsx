import React from "react";
import Connectivity from "./Connectivity";
import ResourceSection from "./ResourceSection";

class Links extends React.Component {
  render() {
    return (
      <div className="row g-2 p-0">
        <div className="col-4 border-2">
          <ResourceSection />
        </div>
        <div className="col border-2">
          <Connectivity />
        </div>
      </div>
    );
  }
}

export default Links;
