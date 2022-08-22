import React, { Component } from "react";

class MyData extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(() => ({
        count: this.state.count + 1,
      }));
    }, 1000);
  }

  render() {
    const { name, Bio, Profession } = this.props;
    return (
      <div>
        <h2> {this.state.count}</h2>
        <h1>Full Name: {name}</h1>
        <h2>Bio: {Bio}</h2>
        <h3>Profession: {Profession}</h3>
      </div>
    );
  }
}
export default MyData;
