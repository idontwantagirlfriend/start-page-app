import React, { useContext } from "react";
import { nightModeContext } from "../App";
import { darkModeClassNames } from "../css/js/darkModeClassNames";
import { lightModeClassNames } from "../css/js/LightModeClassNames";

export default function Footer() {
  const content = "Created with react!";
  const themeClassNames = useContext(nightModeContext)
    ? darkModeClassNames
    : lightModeClassNames;
  return (
    <div className={themeClassNames.footer}>
      <span style={{ fontSize: 12 }}>{content}</span>
    </div>
  );
}
