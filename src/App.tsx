import * as React from "react";
import "./styles/App.css";
import Routes from "./components/Routes";
import Navigation from "./components/Navigation/Navigation";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default App;
