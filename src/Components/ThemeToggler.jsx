import React, { useContext } from "react";
import { handleToggleThemeContext, nightModeContext } from "../App";
import { darkModeClassNames } from "../js/darkModeClassNames";
import { lightModeClassNames } from "../js/LightModeClassNames";

export default function ThemeToggler(props) {
  const onToggleTheme = useContext(handleToggleThemeContext);
  const themeClassNames = useContext(nightModeContext)
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
