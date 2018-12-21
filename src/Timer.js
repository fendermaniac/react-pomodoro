import React, { Component } from 'react';

const Timer = (props) => {
    return (
      <div className={props.className}>
        <h2 id={props.labelID}>{props.label}</h2>
        <div id={props.timeID} className="countdown">
          {props.timeLeft}
        </div>
        <button
          className="btn"
          id={props.startStopID}
          onClick={props.toggleTimer}
        >
          {props.startStop}
        </button>
        <button className="btn" id={props.resetID} onClick={props.reset}>
          Reset
        </button>
        <audio
          id="beep"
          src="https://archive.org/download/carlosnochi_yahoo_Beep/beep.mp3"
        />
      </div>
    );
  }

  
export default Timer;
