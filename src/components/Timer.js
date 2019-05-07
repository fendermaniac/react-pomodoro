import React from 'react';

const Timer = (
  { 
    labelID, 
    label,  
    timeID, 
    timeLeft, 
    startStopID, 
    toggleTimer, 
    startStop,
    resetID, 
    reset,
    audioElement
  }
  ) => {
  return ( 
    <div className="timer">
    <h2 id={labelID}>{label}</h2>
    <div id={timeID} className="countdown">
      {timeLeft}
    </div>
    <button
      className="btn"
      id={startStopID}
      onClick={toggleTimer}
    >
      {startStop}
    </button>
    <button className="btn" id={resetID} onClick={reset}>
      Reset
    </button>
    <audio
      id="beep"
      ref={audioElement}
      src="https://archive.org/download/carlosnochi_yahoo_Beep/beep.mp3"
    />
  </div>
   );
}
 
export default Timer;