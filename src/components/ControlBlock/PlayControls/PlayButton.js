import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './PlayButton.css';

@inject('AppStore', 'FloorStore')
@observer
export default class PlayButton extends Component {
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
    const playerClassName = this.props.AppStore.isPlaying ? 'play-button--stopped' : 'play-button--playing';
    
    return(
      <button className={`play-button ${playerClassName}`} onClick={this.togglePlayerState}>
        <span>{playerIcon}</span>
      </button>
    )
  }
}
