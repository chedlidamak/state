import React, { Component } from "react";
import MyData from "./MyData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "Chedli Damak",
      Bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere maiores delectus nisi animi dolorem earum sit et! Ab cumque accusantium ea, harum alias nostrum reiciendis voluptate corrupti, laboriosam debitis ipsa?",
      Profession: "GoMyCode Bootcamp",
      show: true,
    };
  }

  showData = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        {this.state.show ? (
          <MyData
            name={this.state.FullName}
            bio={this.state.Bio}
            Profession={this.state.Profession}
          />
        ) : (
          "Sorry 🙄"
        )}
        <button onClick={this.showData}>click Me</button>
      </div>
    );
  }
}

export default App;
