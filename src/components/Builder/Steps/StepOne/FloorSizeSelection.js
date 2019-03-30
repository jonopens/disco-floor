import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './FloorSizeSelection.css';

@inject('BuilderStore')
@observer
export default class FloorSizeSelection extends Component {
  handleClick = (e) => {
    if (this.props.size !== this.props.BuilderStore.floorSize) {
      this.props.BuilderStore.setFloorSize(this.props.size);
      this.props.BuilderStore.addFirstFrame(this.props.size);
      return true;
    }
    return false;
  }
  
  render() {
    const selectedClass = this.props.size === this.props.BuilderStore.floorSize
      ? 'floor-size-selection--selected'
      : '';
    return (
      <div
        onClick={this.handleClick}
        className={`floor-size-selection ${selectedClass}`}
      >
        {`${this.props.size} x ${this.props.size}`}
      </div>
    );
  }
}
