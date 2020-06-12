import React, { Component } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

import resumeData from "./resumeData"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData,
    };
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Resume data={this.state.resumeData.resume} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
