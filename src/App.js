import "./App.css";
import React from "react";
import Header from "./components/global/Header";
import Navigation from "./components/global/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import PageSwitcher from "./components/global/PageSwitcher";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Your Dashboard"
    };
  }

  newPage = (e, pageTitle) => {
    this.setState({ pageTitle });
  };

  render = () => (
    <div className="App">
      <Router>
        <Header pageTitle={this.state.pageTitle} />
        <Navigation newPage={this.newPage} />
        <PageSwitcher />
      </Router>
    </div>
  );
}

export default App;
