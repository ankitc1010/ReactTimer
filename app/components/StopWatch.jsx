import React from 'react';
import Clock from 'Clock';
import Form from 'Form';
class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.intialState = {
            timeString: '00:00:000',
            time: 0,
            startState: true,
            lap:[]
        }
        this.increment = null;
        this.contexto = this;
    }
    componentWillUpdate(){
      console.log("componentWillUpdate called");
    }
    componentDidUpdate() {
      console.log("componentDidUpdate called");
    }
    timeStringifyGenerator(timeInMiliSeconds) {
        let milliSeconds = timeInMiliSeconds % 1000;
        let seconds = Math.floor((timeInMiliSeconds / 1000)%60);
        let minutes = Math.floor(timeInMiliSeconds / 60000);
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
    constantUpdate() {
        var that = this;
        let {time} = this.state;
        this.setState({
          startState: false
        })
        this.increment = setInterval(this.update.bind(this), 5);
    }
    update() {
      var {time} = this.state;
      this.setState({
          timeString: this.timeStringifyGenerator(time),
          time: time + 5
      })
    }
    reset() {
      clearInterval(this.increment);
      this.clear();

    }
    clear() {
      this.setState(this.intialState)
    }
    stopTime() {
        clearInterval(this.increment);
        this.setState({
          startState: true
        })
    }
    componentWillUnmount() {
      clearInterval(this.increment);
    }
    render() {
        return (
            <center><Clock show={this.state.timeString} main="STOPWATCH"/>
                <Form stateStart={this.state.startState} initiateStart={this.constantUpdate.bind(this)} initiateStop={this.stopTime.bind(this)} initiateReset={this.reset.bind(this)}/></center>
        )
    }
}
export default StopWatch;
