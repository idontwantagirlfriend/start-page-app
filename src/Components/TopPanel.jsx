import logo from "../logo.svg";
import React from "react";
import ThemeToggler from "./NightModeSwitch";
import { darkModeClassNames, darkModeStyles } from "../css/js/darkModeStyles";
import {
  lightModeClassNames,
  lightModeStyles,
} from "../css/js/lightModeStyles";

class TopPanel extends React.Component {
  render() {
    const { themeData } = this.props;
    const { nightModeIsOn } = themeData;
    const themeClassNames = nightModeIsOn
      ? darkModeClassNames
      : lightModeClassNames;
    const themeStyles = nightModeIsOn ? darkModeStyles : lightModeStyles;

    const navBarClassName = themeClassNames.navBar;
    const navBarStyle = themeStyles.navBar;
    const textClassName = themeClassNames.text + " navbar-brand";
    return (
      <nav className={navBarClassName} style={navBarStyle}>
        <div className="container-fluid justify-content-between">
          <div className="col-3 align-items-start">
            <a className={textClassName} href="#">
              Fixed top
            </a>
            <img style={styles.img} src={logo} />
          </div>
          <div className="align-self-end align-content-end ">
            <ThemeToggler themeData={themeData} />
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
