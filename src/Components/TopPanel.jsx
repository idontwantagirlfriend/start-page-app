import logo from "../logo.svg";
import React, { useContext, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { darkModeClassNames } from "../js/darkModeClassNames";
import { lightModeClassNames } from "../js/LightModeClassNames";
import { nightModeContext } from "../App";
export default function TopPanel() {
  const [content, setContent] = useState(
    `I hope you know what you are doing...`
  );

  const themeClassNames = useContext(nightModeContext)
    ? darkModeClassNames
    : lightModeClassNames;

  const navBarClassName = themeClassNames.navBar;
  const textClassName = themeClassNames.text + " navbar-brand";
  return (
    <nav className={navBarClassName}>
      <div className="container-fluid justify-content-start">
        <div className="col-1">
          <a href="https://reactjs.org/">
            <img style={styles.img} src={logo} alt="" className="App-logo" />
          </a>
        </div>
        <div className="col-5 align-items-start overflow-visible">
          <span className={textClassName}>{content}</span>
        </div>
        <div className="align-self-end align-content-end ms-auto ">
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
}

const styles = {
  img: {
    width: "100%",
    height: "100%",
  },
};
