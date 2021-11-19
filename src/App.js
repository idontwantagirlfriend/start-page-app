import "./App.css";
import "./css/styles.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import TopPanel from "./Components/TopPanel";
import SearchBar from "./Components/SearchBar";
import Action from "./Components/Action";
import Links from "./Components/Links";
import Footer from "./Components/Footer";

class App extends Component {
  state = {
    nightModeIsOn: false,
    mainId: "main",
  };
  handleToggleTheme = () => {
    const newState = { ...this.state };
    newState.nightModeIsOn = !newState.nightModeIsOn;
    this.setState(newState);
  };
  handleSearchBarAcquiresFocus = () => {
    const newState = { ...this.state };
    newState.mainId = "main-focus";
    this.setState(newState);
  };
  handleSearchBarLosesFocus = () => {
    const newState = { ...this.state };
    newState.mainId = "main";
    this.setState(newState);
  };
  render() {
    const nightModeIsOn = this.state.nightModeIsOn;
    const themeData = {
      nightModeIsOn,
      handleToggleTheme: this.handleToggleTheme,
    };
    const mainId = this.state.mainId;
    const nightClassName = nightModeIsOn ? "night " : "";
    return (
      <div className="App">
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
        <div className={`container-fluid ${nightClassName}`} id={mainId}>
          <div className="container">
            <TopPanel themeData={themeData} />
            <div className="row page-block" id="searchBar-row">
              <SearchBar
                onSearchBarAcquiresFocus={this.handleSearchBarAcquiresFocus}
                onSearchBarLosesFocus={this.handleSearchBarLosesFocus}
                nightModeIsOn={nightModeIsOn}
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
      </div>
    );
  }
}
export default App;
