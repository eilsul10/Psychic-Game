import React, { Component } from 'react';
import Body from "../src/components/Body";
import NavBar from "../src/components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Body />
      </div>
    );
  }
}

export default App;
