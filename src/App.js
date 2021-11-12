import logo from "./logo.svg";
import "./App.css";
import "./Components/css/styles.css";
import TopPanel from "./Components/TopPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import Grid from "./Components/Grid";
import FirstScreen from "./Components/FirstScreen";

function App() {
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
      <body className="container p-0">
        <TopPanel />
        <FirstScreen />
      </body>
    </div>
  );
}

export default App;
