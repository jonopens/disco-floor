import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '../Common/Button';

@inject('FloorStore', 'AppStore')
@observer
export default class PlayControl extends Component {
  togglePlayerState = (event) => {
    event.preventDefault();
    const { AppStore, FloorStore } = this.props;
    
    AppStore.setIsPlaying(!AppStore.isPlaying);
    if (AppStore.isPlaying) {
      FloorStore.resetFrameInterval();
    } else {
      clearInterval(FloorStore.frameInterval);
    }
  }

  render() {
    const playerIcon = this.props.AppStore.isPlaying ? '◼' : '▶';
    const playerClassName = this.props.AppStore.isPlaying
      ? 'button__play-button button__play-button--stopped'
      : 'button__play-button button__play-button--playing';
      
    return(
      <div className="control-block__item  control-block__item--play">
        <Button
          handleClick={this.togglePlayerState}
          buttonClass={playerClassName}
          buttonText={playerIcon}
        />
      </div>
    )
  }
}