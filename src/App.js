import "./App.css";
import React from "react";
class App extends React.Component {
  state = {
    name: "Renato Gama",
    counter: 0,
  };

  render() {
    const { name, counter } = this.state;

    return <div className="App"></div>;
  }
}

export default App;
