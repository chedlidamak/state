import React, { Component } from "react";
import MyData from "./MyData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  showData = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        {this.state.show ? <MyData /> : "Sorry 🙄"}
        <button onClick={this.showData}>click Me</button>
      </div>
    );
  }
}

export default App;
