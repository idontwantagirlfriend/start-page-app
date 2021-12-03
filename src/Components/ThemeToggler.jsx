import React from "react";
import { darkModeClassNames } from "../css/js/darkModeClassNames";
import { lightModeClassNames } from "../css/js/LightModeClassNames";

export default function ThemeToggler(props) {
  const onToggleTheme = props.themeData.handleToggleTheme;
  const nightModeIsOn = props.themeData.nightModeIsOn;
  const themeClassNames = nightModeIsOn
    ? darkModeClassNames
    : lightModeClassNames;
  const themeIconClassName = themeClassNames.icon;
  const buttonClassName = themeClassNames.button;
  return (
    <button className={buttonClassName} onClick={onToggleTheme}>
      <i className={themeIconClassName} aria-hidden="true"></i>
    </button>
  );
}
