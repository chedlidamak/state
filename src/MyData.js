import React, { Component } from 'react'

class MyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "Chedli Damak",
      Bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere maiores delectus nisi animi dolorem earum sit et! Ab cumque accusantium ea, harum alias nostrum reiciendis voluptate corrupti, laboriosam debitis ipsa?",
      Profession: "GoMyCode Bootcamp",
      show: false
    };
  }
  showData=()=>{this.setState({show:!this.state.show})}
  render() {
    return (
      <div>
        <h1>Full Name: {this.state.FullName}</h1>
        <h2>Bio: {this.state.Bio}</h2>
        <img src="logo192.png" alt="Chedli Damak" />
        <h4>
          {this.state.FullName} Profession {this.state.Profession}
        </h4>
      </div>
    );
  }
}
export default MyData