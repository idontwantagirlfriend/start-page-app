import React from "react";
import Profile from "./ProfilePanel";
import Calendar from "./Calendar";

class Action extends React.Component {
  render() {
    return (
      <div className="row g-2 p-0">
        <div className="col-4 border-2">
          <Profile />
        </div>
        <div className="col border-2">
          <Calendar />
        </div>
      </div>
    );
  }
}

export default Action;
