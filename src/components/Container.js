import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ControlBlock from './ControlBlock/ControlBlock';
import Floor from './Floor/Floor';
import FloorBuilder from './FloorBuilder/FloorBuilder';
import './Container.css';

@inject('AppStore')
@observer
class Container extends Component {
  render() {
    if (this.props.AppStore.containerName === 'Player') {
      return (
        <div className="container">
          <ControlBlock />
          <Floor />
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
