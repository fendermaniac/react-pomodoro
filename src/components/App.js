/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Timer from './Timer';
import TimeConfig from './TimeConfig';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      timer: 1500,
      sessionLabel: 'Start Session',
      sessionActive: false,
      isPaused: false,
      startStop: 'Start',
    };
    this.updatePomodoro = this.updatePomodoro.bind(this);
    this.resetPomodoro = this.resetPomodoro.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  componentDidUpdate() {
    if (this.state.timer < 0 && this.state.sessionLabel === 'Session') {
      this.setState({
        timer: this.state.break * 60,
        sessionLabel: 'Break',
      });
      const beep = document.getElementById('beep');
      beep.currentTime = 0;
      beep.play();
    } else if (this.state.timer < 0 && this.state.sessionLabel === 'Break') {
      clearInterval(this.countdown);
      this.setState({
        break: 5,
        session: 25,
        timer: 1500,
        sessionLabel: 'Start Session',
        sessionActive: false,
        isPaused: false,
        startStop: 'Start',
      });
      const beep = document.getElementById('beep');
      beep.currentTime = 0;
      beep.play();
    }
  }

  updatePomodoro(e) {
    switch (e.target.id) {
      case 'break-decrement':
        if (this.state.break > 1) {
          this.setState({
            break: this.state.break - 1,
          });
        }
        break;
      case 'break-increment':
        if (this.state.break < 60) {
          this.setState({
            break: this.state.break + 1,
          });
        }
        break;
      case 'session-decrement':
        if (this.state.session > 1) {
          this.setState({
            session: this.state.session - 1,
          }, () => {
            this.setState({
              timer: this.state.session * 60
            })
          });
        }
        break;
      case 'session-increment':
        if (this.state.session < 60) {
          this.setState({
            session: this.state.session + 1,
          }, () => {
            this.setState({
              timer: this.state.session * 60
            })
          });
        }
        break;
      default:
        
    }
  }

  resetPomodoro() {
    if (this.state.sessionActive) {
      clearInterval(this.countdown);
    }

    this.setState({
      break: 5,
      session: 25,
      timer: 1500,
      sessionLabel: 'Start Session',
      sessionActive: false,
      isPaused: false,
      startStop: 'Start',
    });
    const beep = document.getElementById('beep');
    beep.pause();
    beep.currentTime = 0;
  }

  toggleTimer(e) {
    if (!this.state.sessionActive) {
      this.countdown = setInterval(() => {
        this.setState({
          timer: this.state.timer - 1,
        });
      }, 1000);
      this.setState({
        sessionActive: true,
        sessionLabel: 'Session',
        startStop: 'Pause',
        isPaused: false,
      });
    } else if (!this.state.isPaused) {
      clearInterval(this.countdown);
      this.setState({ isPaused: true, startStop: 'Play' });
    } else if (this.state.isPaused) {
      this.countdown = setInterval(() => {
        this.setState({
          timer: this.state.timer - 1,
        });
      }, 1000);
      this.setState({ isPaused: false, startStop: 'Pause' });
    }
  }

  render() {
    return (
      <div className="container">
        <h1>
          <span role="img" aria-label="pomodoro-emoji">
            🍅
          </span>
          Pomodoro
          <span role="img" aria-label="pomodoro-emoji">
            🍅
          </span>
        </h1>
        <Timer
          label={this.state.sessionLabel}
          timeLeft={`${
            Math.floor(this.state.timer / 60) < 10 ? '0' : ''
          }${Math.floor(this.state.timer / 60)}:${
            this.state.timer % 60 < 10 ? '0' : ''
          }${this.state.timer % 60}`}
          startStop={this.state.startStop}
          reset={this.resetPomodoro}
          toggleTimer={this.toggleTimer}
          labelID="timer-label"
          timeID="time-left"
          startStopID="start_stop"
          resetID="reset"
        />
        <TimeConfig
          className="time-config"
          label="Break Length"
          length={this.state.break}
          labelID="break-label"
          lengthID="break-length"
          decrementID="break-decrement"
          incrementID="break-increment"
          updatePomodoro={this.updatePomodoro}
        />
        <TimeConfig
          className="time-config"
          label="Session Length"
          length={this.state.session}
          labelID="session-label"
          lengthID="session-length"
          decrementID="session-decrement"
          incrementID="session-increment"
          updatePomodoro={this.updatePomodoro}
        />
      </div>
    );
  }
}


export default App;
