import React from 'react';

class Clock extends React.Component {


    render() {
        return (
          <div>
            <center><h2><strong>{this.props.main}</strong></h2></center>
            <div className="outer-circle">
              <span className="inner-text">{this.props.show}</span>


            </div>
          </div>
        )
    }
}
export default Clock;
