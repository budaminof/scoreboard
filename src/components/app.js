import React, { Component } from 'react';
import Timer from './timer';
import Score from './score';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameOver: false
    }
  }

  stopGame() {
    return this.setState({ gameOver: true });
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1 className="text-center">Scoreboard</h1>

        <div className="col-md-4 col-md-offset-4">
          <Timer></Timer>
        </div>

        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <Score gameStatus={ this.stopGame.bind(this) } gameFinished={ this.state.gameOver }
              ></Score>
          </div>
          <div className="col-md-4">
            <Score gameStatus={ this.stopGame.bind(this) } gameFinished={ this.state.gameOver }
              ></Score>
          </div>
        </div>

        <div className="col-md-6 col-md-offset-4">
          <h1> {this.state.gameOver ? 'GAME OVER' : ''} </h1>
        </div>
      </div>
    );
  }
}
