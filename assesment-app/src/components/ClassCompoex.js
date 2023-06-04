import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    // Start the timer when the component mounts
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000); // Update the time every second
  }

  componentWillUnmount() {
    // Clear the timer when the component unmounts
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>Hello, I am a class component!</h1>
        <p>Time elapsed: {this.state.time} seconds</p>
      </div>
    );
  }
}

export default ClassComponent;

