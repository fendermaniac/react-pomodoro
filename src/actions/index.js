import { DECREMENT_BREAK} from './types';

export const updatePomodoro = (e) => {
  switch (e.target.id) {
    case 'break-decrement':
      if (this.state.break > 1) {
        return {
          type: DECREMENT_BREAK,
          payload: break,
        }
        // this.setState({
        //   break: this.state.break - 1,
        // }
        ,
        () => { 
          if (this.state.sessionLabel === 'Break') {
            this.setState({
            timer: this.state.break * 60
          }) 
          }
        });
      }
      break;
    case 'break-increment':
      if (this.state.break < 60) {
        this.setState({
          break: this.state.break + 1,
        },
        () => { 
          if (this.state.sessionLabel === 'Break') {
            this.setState({
            timer: this.state.break * 60
          }) 
          }
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