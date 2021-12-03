import "./App.css";
import "./css/styles.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { Component, createContext, useState } from "react";
import { Helmet } from "react-helmet";
import TopPanel from "./Components/TopPanel";
import SearchBar from "./Components/SearchBar";
import Action from "./Components/Action";
import Links from "./Components/Links";
import Footer from "./Components/Footer";

export const nightModeContext = createContext();

export default function App() {
  const [nightMode, setNightMode] = useState(true);
  const nightClassName = nightMode ? "night " : "";

  const [mainId, setMainId] = useState("main");

  const handleToggleTheme = () => {
    setNightMode(!nightMode);
  };
  const handleSearchBarAcquiresFocus = () => {
    setMainId("main-focus");
  };
  const handleSearchBarLosesFocus = () => {
    setMainId("main");
  };

  const themeData = {
    nightModeIsOn: nightMode,
    handleToggleTheme: handleToggleTheme,
  };
  return (
    <div className="App">
      <PageHead />
      <nightModeContext.Provider value={nightMode}>
        <div className={`container-fluid ${nightClassName}`} id={mainId}>
          <div className="container">
            <TopPanel themeData={themeData} />
            <div className="row page-block" id="searchBar-row">
              <SearchBar
                onSearchBarAcquiresFocus={handleSearchBarAcquiresFocus}
                onSearchBarLosesFocus={handleSearchBarLosesFocus}
              />
            </div>
            <div className="row page-block">
              <Action />
            </div>
            <div className="row page-block">
              <Links />
            </div>
          </div>
        </div>
        <footer className={`${nightClassName}`}>
          <Footer themeData={themeData} />
        </footer>
      </nightModeContext.Provider>
    </div>
  );
}
function PageHead() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <title>Hello, world!</title>
    </Helmet>
  );
}
