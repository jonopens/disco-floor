import React from 'react';
import SpeedChoice from './SpeedChoice';
import './SpeedControl.css';

class SpeedControl extends React.Component {

  render() {
    return(
      <div className="control-block__item  control-block__item--speed">
        <SpeedChoice speed="0.5" />
        <SpeedChoice speed="1.0" />
        <SpeedChoice speed="2.0" />
        <SpeedChoice speed="4.0" />
      </div>
    )
  }
}

export default SpeedControl;