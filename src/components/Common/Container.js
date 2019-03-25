import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PlayerControls from '../Controls/PlayerControls/PlayerControls';
import PlayerFloor from '../Floors/PlayerFloor';
import FloorBuilder from '../Builder/FloorBuilder';
import './Container.css';

@inject('PlayerStore')
@observer
class Container extends Component {
  render() {
    if (this.props.PlayerStore.containerName === 'Player') {
      return (
        <div className="container">
          <PlayerControls />
          <PlayerFloor />
        </div>
      )
    }
    return (
      <div className="container">
        <FloorBuilder />
      </div>
    )
  }
}

export default Container;
