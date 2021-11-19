import React from "react";
import { darkModeClassNames } from "../css/js/darkModeClassNames";
import { lightModeClassNames } from "../css/js/LightModeClassNames";

class Footer extends React.Component {
  render() {
    const content = "Created with react!";
    const { themeData } = this.props;
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
}

export default Footer;
