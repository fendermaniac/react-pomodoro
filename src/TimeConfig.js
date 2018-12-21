import React, { Component } from 'react';

const TimeConfig = (props) => {
    return (
      <div className={props.className}>
        <h2 id={props.labelID}>{props.label}</h2>
        <div className="pomodoro-length" id={props.lengthID}>{props.length}</div>
        <button
          className="btn"
          id={props.decrementID}
          onClick={props.updatePomodoro}
        >
          -
        </button>
        <button
          className="btn"
          id={props.incrementID}
          onClick={props.updatePomodoro}
        >
          +
        </button>
      </div>
    );
  }
  
  export default TimeConfig;
