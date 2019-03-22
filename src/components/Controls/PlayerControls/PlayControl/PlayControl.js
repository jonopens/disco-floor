import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '../../../Common/Button';

@inject('PlayerStore', 'AppStore')
@observer
export default class PlayControl extends Component {
  togglePlayerState = (event) => {
    event.preventDefault();
    const { AppStore, PlayerStore } = this.props;
    
    AppStore.setIsPlaying(!AppStore.isPlaying);
    if (AppStore.isPlaying) {
      PlayerStore.resetFrameInterval();
    } else {
      clearInterval(PlayerStore.frameInterval);
    }
  }

  render() {
    const { AppStore } = this.props;
    return(
      <div className="control-block__item  control-block__item--play">
        <Button
          handleClick={this.togglePlayerState}
          buttonClass={AppStore.playerClassName}
          buttonText={AppStore.playerIcon}
        />
      </div>
    )
  }
}