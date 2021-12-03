import React from "react";
import Connectivity from "./Connectivity";
import ResourceSection from "./ResourceSection";

export default function Links() {
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
