import React, { Component } from 'react';

export default class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: '0',
    }
  }

  scoreUp() {
    if (this.props.gameFinished) return;
    this.setState({score: Number(this.state.score) + 2 });
    if (this.state.score === 8) this.props.gameStatus();
    return
  }

  render() {
    return (
      <div className="score">
        <h1>{ this.state.score }</h1>
        <button onClick={ this.scoreUp.bind(this) }
          className="btn">SCORE</button>
      </div>
    );
  }
}
