import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '../../../Common/Button';

@inject('PlayerStore')
@observer
export default class PlayControl extends Component {
  togglePlayerState = (event) => {
    event.preventDefault();
    const { PlayerStore } = this.props;
    
    PlayerStore.setIsPlaying(!PlayerStore.isPlaying);
    if (PlayerStore.isPlaying) {
      PlayerStore.resetFrameInterval();
    } else {
      clearInterval(PlayerStore.frameInterval);
    }
  }

  render() {
    const { PlayerStore } = this.props;
    return(
      <div className="control-block__item  control-block__item--play">
        <Button
          handleClick={this.togglePlayerState}
          buttonClass={PlayerStore.playerClassName}
          buttonText={PlayerStore.playerIcon}
        />
      </div>
    )
  }
}