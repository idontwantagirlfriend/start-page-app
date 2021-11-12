import React, { Component } from "react";

class Grid extends React.Component {
  render() {
    return (
      <div className="container border">
        <div className="row">
          <div id="first-grid" className="col-4 border">
            <p>grid-item</p>
          </div>
          <div className="col-4 border">
            <p>grid-item</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 border bg-light">
            <p>grid-item</p>
          </div>
          <div className="col-4">
            <p>grid-item</p>
          </div>
          <div className="col-4">
            <p>grid-item</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
