import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './SpeedChoice.css';

@inject('AppStore','FloorStore')
@observer
export default class SpeedChoice extends Component {
  changeSpeedSelection = (event) => {
    event.preventDefault();
    this.props.FloorStore.setSelectedSpeed(+this.props.speed);
    if(this.props.AppStore.isPlaying) {
      this.props.FloorStore.resetFrameInterval();
    }
  }

  render() {
    const choiceClassNames = +this.props.speed === this.props.FloorStore.selectedSpeed
      ? "speed-choice speed-choice--selected"
      : "speed-choice";
    return(
      <span onClick={this.changeSpeedSelection} className={choiceClassNames}>{`${this.props.speed}x`}</span>
    )
  }
}
