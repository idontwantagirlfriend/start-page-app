import React from "react";
import Profile from "./ProfilePanel";
import Calendar from "./Calendar";

class Action extends React.Component {
  render() {
    return (
      <div className="container p-2 border border-2 border-danger align-items-center">
        <div className="row g-1">
          <div className="col-4 border-end border-dark border-2">
            <Profile />
          </div>
          <div className="col border-start border-dark border-2">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

export default Action;
