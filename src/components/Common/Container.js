import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PlayerControls from '../Controls/PlayerControls/PlayerControls';
import PlayerFloor from '../Floors/PlayerFloor';
import FloorBuilder from '../Builder/FloorBuilder';
import './Container.css';

@inject('AppStore')
@observer
class Container extends Component {
  render() {
    if (this.props.AppStore.containerName === 'Player') {
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
