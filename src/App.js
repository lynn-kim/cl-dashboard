import "./App.css";
import "typeface-signika";
import "typeface-montserrat";
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

  componentDidMount = () => this.fetchAPIMessage();

  fetchAPIMessage = async () => {
    try {
      const res = await fetch(`/api/message`);
      const { message } = await res.json();
      this.setState({ message });
    } catch (err) {
      console.error(err);
    }
  };
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
