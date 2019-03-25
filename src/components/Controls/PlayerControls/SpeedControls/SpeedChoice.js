import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './SpeedChoice.css';

@inject('PlayerStore')
@observer
export default class SpeedChoice extends Component {
  changeSpeedSelection = (event) => {
    event.preventDefault();
    this.props.PlayerStore.setSelectedSpeed(+this.props.speed);
    if(this.props.PlayerStore.isPlaying) {
      this.props.PlayerStore.resetFrameInterval();
    }
  }

  render() {
    const isSelectedSpeed = +this.props.speed === this.props.PlayerStore.selectedSpeed
    const choiceClassNames = isSelectedSpeed
      ? "speed-choice speed-choice--selected"
      : "speed-choice speed-choice--not-selected";

    return(
      <span 
        onClick={this.changeSpeedSelection}
        className={choiceClassNames}
      >
        <span className={isSelectedSpeed ? 'speed-choice__text' : ''}>{`${this.props.speed}x`}</span>
      </span>
    )
  }
}
