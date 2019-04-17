import React from 'react';

const TimeConfig = ( 
  { 
    labelID, 
    label, 
    lengthID, 
    length, 
    decrementID, 
    updatePomodoro, 
    incrementID
  }) => {
  return (     
  <div className="time-config">
    <h2 id={labelID}>{label}</h2>
    <div className="pomodoro-length" id={lengthID}>{length}</div>
    <button
      className="btn"
      id={decrementID}
      onClick={updatePomodoro}
    >
      -
    </button>
    <button
      className="btn"
      id={incrementID}
      onClick={updatePomodoro}
    >
      +
    </button>
  </div> );
}
 
export default TimeConfig;