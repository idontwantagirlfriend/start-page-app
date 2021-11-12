import React from "react";
import NightModeSwitch from "./NightModeSwitch";

class TopPanel extends React.Component {
  render() {
    return (
      <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid g-2">
          <a class="navbar-brand" href="#">
            Fixed top
          </a>
          <NightModeSwitch />
        </div>
      </nav>
    );
  }
}

export default TopPanel;
