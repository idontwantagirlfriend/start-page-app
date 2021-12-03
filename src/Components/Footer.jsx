import React from "react";
import { darkModeClassNames } from "../css/js/darkModeClassNames";
import { lightModeClassNames } from "../css/js/LightModeClassNames";

export default function Footer(props) {
  const content = "Created with react!";
  const { themeData } = props;
  const { nightModeIsOn } = themeData;
  const themeClassNames = nightModeIsOn
    ? darkModeClassNames
    : lightModeClassNames;
  return (
    <div className={themeClassNames.footer}>
      <span style={{ fontSize: 12 }}>{content}</span>
    </div>
  );
}
