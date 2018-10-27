import React, { Component } from "react"; // SI O SI hay que hacerlo

class Timer extends Component {
  state = {
    timer: 0
  };
  componentDidMount() {
    this.empezarReloj(); // TODO: aprender THIS
  }
  empezarReloj = () => {
    setInterval(() => {
      const segundero = this.state.timer; // 1
      this.setState({ timer: segundero + 1 }); // 2
    }, 1000);
  };
  render() {
    return (
      <p>
        Este es el timer {this.props.title} {this.state.timer}
      </p>
    );
  }
}

// TO DO: Aprender import/export de paquetes
export default Timer;
