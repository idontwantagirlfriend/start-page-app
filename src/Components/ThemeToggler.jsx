import React from "react";
import { darkModeClassNames } from "../css/js/darkModeClassNames";
import { lightModeClassNames } from "../css/js/LightModeClassNames";

class ThemeToggler extends React.Component {
  onToggleTheme = () => {
    this.props.themeData.handleToggleTheme();
  };
  render() {
    const nightModeIsOn = this.props.themeData.nightModeIsOn;
    const themeClassNames = nightModeIsOn
      ? darkModeClassNames
      : lightModeClassNames;
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
