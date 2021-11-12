import logo from "../logo.svg";
import React from "react";
import NightModeSwitch from "./NightModeSwitch";

class TopPanel extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-light bg-primary bg-gradient">
        <div className="container-fluid justify-content-between">
          <div className="col-3 align-items-start">
            <a className="navbar-brand text-white" href="#">
              Fixed top
            </a>
            <img style={styles.img} src={logo} />
          </div>
          <div className="align-self-end align-content-end ">
            <NightModeSwitch />
          </div>
        </div>
      </nav>
    );
  }
}

const styles = {
  img: {
    width: "25%",
    height: "25%",
  },
};

export default TopPanel;
