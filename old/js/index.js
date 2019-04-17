var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function TimeConfig(props) {
  return (
    React.createElement("div", { className: props.className },
      React.createElement("h2", { id: props.labelID }, props.label),
      React.createElement("div", { className: "pomodoro-length", id: props.lengthID }, props.length),
      React.createElement("button", {
          className: "btn",
          id: props.decrementID,
          onClick: props.updatePomodoro }, "-"),



      React.createElement("button", {
          className: "btn",
          id: props.incrementID,
          onClick: props.updatePomodoro }, "+")));





}

function Timer(props) {
  return (
    React.createElement("div", { className: props.className },
      React.createElement("h2", { id: props.labelID }, props.label),
      React.createElement("div", { id: props.timeID, className: "countdown" },
        props.timeLeft),

      React.createElement("button", {
          className: "btn",
          id: props.startStopID,
          onClick: props.toggleTimer },

        props.startStop),

      React.createElement("button", { className: "btn", id: props.resetID, onClick: props.reset }, "Reset"),


      React.createElement("audio", {
        id: "beep",
        src: "https://archive.org/download/carlosnochi_yahoo_Beep/beep.mp3" })));



}var

Pomodoro = function (_React$Component) {_inherits(Pomodoro, _React$Component);
  function Pomodoro(props) {_classCallCheck(this, Pomodoro);var _this = _possibleConstructorReturn(this, (Pomodoro.__proto__ || Object.getPrototypeOf(Pomodoro)).call(this,
    props));
    _this.state = {
      break: 5,
      session: 25,
      timer: 1500,
      sessionLabel: "Start Session",
      sessionActive: false,
      isPaused: false,
      startStop: "Start" };

    _this.updatePomodoro = _this.updatePomodoro.bind(_this);
    _this.resetPomodoro = _this.resetPomodoro.bind(_this);
    _this.toggleTimer = _this.toggleTimer.bind(_this);return _this;
  }_createClass(Pomodoro, [{ key: "componentDidUpdate", value: function componentDidUpdate()
    {
      if (this.state.timer < 0 && this.state.sessionLabel === "Session") {
        this.setState({
          timer: this.state.break * 60,
          sessionLabel: "Break" });

        var beep = document.getElementById("beep");
        beep.currentTime = 0;
        beep.play();
      } else if (this.state.timer < 0 && this.state.sessionLabel === "Break") {
        clearInterval(countdown);
        this.setState({
          break: 5,
          session: 25,
          timer: 1500,
          sessionLabel: "Start Session",
          sessionActive: false,
          isPaused: false,
          startStop: "Start" });

        var _beep = document.getElementById("beep");
        _beep.currentTime = 0;
        _beep.play();
      }
    } }, { key: "updatePomodoro", value: function updatePomodoro(
    e) {
      switch (e.target.id) {
        case "break-decrement":
          if (this.state.break > 1) {
            this.setState({
              break: --this.state.break });

          }
          break;
        case "break-increment":
          if (this.state.break < 60) {
            this.setState({
              break: ++this.state.break });

          }
          break;
        case "session-decrement":
          if (this.state.session > 1) {
            this.setState({
              session: --this.state.session,
              timer: this.state.session * 60 });

          }
          break;
        case "session-increment":
          if (this.state.session < 60) {
            this.setState({
              session: ++this.state.session,
              timer: this.state.session * 60 });

          }
          break;
        default:
          return;}

    } }, { key: "resetPomodoro", value: function resetPomodoro()
    {
      if (this.state.sessionActive) {
        clearInterval(countdown);
      }

      this.setState({
        break: 5,
        session: 25,
        timer: 1500,
        sessionLabel: "Start Session",
        sessionActive: false,
        isPaused: false,
        startStop: "Start" });

      var beep = document.getElementById("beep");
      beep.pause();
      beep.currentTime = 0;
    } }, { key: "toggleTimer", value: function toggleTimer(

    e) {var _this2 = this;
      if (!this.state.sessionActive) {
        countdown = setInterval(function () {
          _this2.setState({
            timer: --_this2.state.timer });

        }, 1000);
        this.setState({
          sessionActive: true,
          sessionLabel: "Session",
          startStop: "Pause",
          isPaused: false });

      } else if (!this.state.isPaused) {
        clearInterval(countdown);
        this.setState({ isPaused: true, startStop: "Play" });
      } else if (this.state.isPaused) {
        countdown = setInterval(function () {
          _this2.setState({
            timer: --_this2.state.timer });

        }, 1000);
        this.setState({ isPaused: false, startStop: "Pause" });
      }
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { className: "container" },
          React.createElement("h1", null, "\uD83C\uDF45 Pomodoro \uD83C\uDF45"),
          React.createElement(Timer, {
            className: "timer",
            label: this.state.sessionLabel,
            timeLeft: "" + (
            Math.floor(this.state.timer / 60) < 10 ? "0" : "") +
            Math.floor(this.state.timer / 60) + ":" + (
            this.state.timer % 60 < 10 ? "0" : "") +
            this.state.timer % 60,
            startStop: this.state.startStop,
            reset: this.resetPomodoro,
            toggleTimer: this.toggleTimer,
            labelID: "timer-label",
            timeID: "time-left",
            startStopID: "start_stop",
            resetID: "reset" }),

          React.createElement(TimeConfig, {
            className: "time-config",
            label: "Break Length",
            length: this.state.break,
            labelID: "break-label",
            lengthID: "break-length",
            decrementID: "break-decrement",
            incrementID: "break-increment",
            updatePomodoro: this.updatePomodoro }),

          React.createElement(TimeConfig, {
            className: "time-config",
            label: "Session Length",
            length: this.state.session,
            labelID: "session-label",
            lengthID: "session-length",
            decrementID: "session-decrement",
            incrementID: "session-increment",
            updatePomodoro: this.updatePomodoro })));



    } }]);return Pomodoro;}(React.Component);


ReactDOM.render(React.createElement(Pomodoro, null), document.getElementById("root"));