import React from "react";
import { darkModeClassNames, darkModeStyles } from "../css/js/darkModeStyles";
import {
  lightModeClassNames,
  lightModeStyles,
} from "../css/js/lightModeStyles";

class ThemeToggler extends React.Component {
  onToggleTheme = () => {
    this.props.themeData.handleToggleTheme();
  };
  render() {
    const nightModeIsOn = this.props.themeData.nightModeIsOn;
    const themeClassNames = nightModeIsOn
      ? darkModeClassNames
      : lightModeClassNames;
    const themeStyles = nightModeIsOn ? darkModeStyles : lightModeStyles;
    const themeIconClassName = themeClassNames.icon;
    const buttonClassName = themeClassNames.button;
    return (
      <button className={buttonClassName} onClick={this.onToggleTheme}>
        <i className={themeIconClassName} aria-hidden="true"></i>
      </button>
    );
  }
}

export default ThemeToggler;
