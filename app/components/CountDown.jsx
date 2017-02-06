import React from 'react';
import Clock from 'Clock';
import Form from 'Form';
import FormInput from 'FormInput';
class CountDown extends React.Component {
  constructor(props){
    super(props);
    this.state = this.initiateStart = {
      startState: true,
      time: 0,
      timeString: '00:00:000'
    }
    this.decrement = null;
  }
  timeStringifyGenerator(timeInMiliSeconds) {
      let amplified = timeInMiliSeconds;
      let milliSeconds = amplified % 1000;
      let seconds = Math.floor((amplified / 1000)%60);
      let minutes = Math.floor(amplified / 60000);
      {if (milliSeconds < 10) {
          milliSeconds = "00" + milliSeconds;
      } else if(milliSeconds < 100) {
        milliSeconds = "0"+milliSeconds
      }}
      if (seconds < 10) {
          seconds = "0" + seconds;
      }
      if (minutes < 10) {
          minutes = "0" + minutes;
      }
      return `${minutes}:${seconds}:${milliSeconds}`;
  }
  constantUpdate(){
      console.log("Button Clicked");
      var inputField = this.refs.numberField;
      if(inputField.value.match(/^[0-9]+$/)){
        var state={
            startState: false,
            time: inputField.value * 1000,
            timeString: this.timeStringifyGenerator(this.state.time)
        };
        this.setState(state);

        this.decrement = setInterval(this.update.bind(this), 5);

      }
  }
  update() {
    var {time} = this.state;
    var constTime = time - 5
    this.setState({
      timeString: this.timeStringifyGenerator(this.state.time),
      time: constTime >= 0 ? constTime : 0
    })
    if(constTime < 0) {
      clearInterval(this.decrement)
      this.decrement = null
    }
  }
  stopTime() {
    clearInterval(this.decrement);
    this.setState({
      startState: true
    })

  }
  reset() {
    this.refs.numberField.value = null;
    this.setState({
      startState: true,
      time: 0,
      timeString: '00:00:000'
    });
    clearInterval(this.decrement);
  }
componentWillUnmount() {
  clearInterval(this.decrement);
}
  render() {
    return (
    <div>
      <Clock show={this.state.timeString} main="COUNTDOWN" />
      <center>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" ref="numberField" id="sample4"/>
          <label className="mdl-textfield__label" htmlFor="sample4">Number</label>
          <span className="mdl-textfield__error">Input is not a number!</span>
      </div>
      <Form stateStart={this.state.startState} initiateStart={this.constantUpdate.bind(this)} initiateStop={this.stopTime.bind(this)} initiateReset={this.reset.bind(this)}/>
    </center>
    </div>
    )
  }
}
export default CountDown;
