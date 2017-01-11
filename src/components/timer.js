import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props){
    super(props);

    this.state = {
      seconds: 0,
      minutes: 1,
      timeEnable: false,
      timer: this.decrementTime()
    }

  }

  decrementTime() {
    return setInterval(()=> {
      if (this.state.timeEnable) {

        if (this.state.minutes == 0 && this.state.seconds == 0) {
          this.setState({
            timeEnable: false,
            seconds: 0,
            minutes: 10
          });
          return
        }

        if (this.state.seconds == 0) {
          this.setState({
            seconds: 59,
            minutes: this.state.minutes - 1
          });
          return
        }

        this.setState({ seconds: Number(this.state.seconds) - 1 });
      }
    }, 1000)
  }

   setTime() {
     this.setState({timeEnable: !this.state.timeEnable});
   }

  render() {

    return (
      <div className="timer row">
        <div>
          <h1 className="text-center">
            { this.state.minutes } : { this.state.seconds }
          </h1>
          <button onClick={ this.setTime.bind(this) } className="btn btn-success center">
            { this.state.timeEnable ? 'STOP' : 'START' }
          </button>
        </div>
      </div>
    );
  }
}
