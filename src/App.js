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
  };
  handleToggleTheme = () => {
    const newState = { ...this.state };
    newState.nightModeIsOn = !newState.nightModeIsOn;
    this.setState(newState);
  };
  // handleAlternateStyleSheet = () => {
  //   const StyleSheets = [];
  //   StyleSheets.concat(document.getElementsByTagName("link"));
  // };
  render() {
    const themeData = {
      nightModeIsOn: this.state.nightModeIsOn,
      handleToggleTheme: this.handleToggleTheme,
    };
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
        <body className="container-fluid" style={styles.body}>
          <div className="container">
            <TopPanel themeData={themeData} />
            <div className="row border">
              <SearchBar />
            </div>
            <div className="row border">
              <Action />
            </div>
            <div className="row border">
              <Links />
            </div>
          </div>
        </body>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
const styles = {
  body: {
    padding: 0,
    paddingTop: 100,
  },
};
export default App;
