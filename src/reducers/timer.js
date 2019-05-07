const defaultState = {
  break: 5,
  session: 25,
  timer: 1500,
  sessionLabel: 'Start Session',
  sessionActive: false,
  isPaused: false,
  startStop: 'Start',
};

const timer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_POMODORO:
     
      return 

    default:
      return state;
  }
};

export default timer;