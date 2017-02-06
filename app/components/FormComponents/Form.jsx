import React from 'react';

class Form extends React.Component {
    handleStart(e) {

        this.props.initiateStart();
    }
    handleStop(e) {

        this.props.initiateStop();
    }
    handlereset(e) {
        this.props.initiateReset();
    }
    renderButton() {
        if (this.props.stateStart) {
            return (
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.handleStart.bind(this)}>
                    START
                </button>

            )
        } else {
            return (
              
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.handleStop.bind(this)}>
                    STOP
                </button>


            )
        }
    }
    render() {
        return (
            <div>
                {this.renderButton()}
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.handlereset.bind(this)}>
                    RESET
                </button>
            </div>
        )
    }
}
export default Form;
