import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ControlBlock from '../Controls/ControlBlock/ControlBlock';
import PlayerFloor from '../Floor/PlayerFloor';
import FloorBuilder from '../Builder/FloorBuilder';
import './Container.css';

@inject('AppStore')
@observer
class Container extends Component {
  render() {
    if (this.props.AppStore.containerName === 'Player') {
      return (
        <div className="container">
          <ControlBlock />
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
