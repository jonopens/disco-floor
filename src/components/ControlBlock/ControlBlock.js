import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import SpeedControl from './SpeedControls/SpeedControl';
import PlayControl from './PlayControl';
import PulseControl from './PulseControl';
import ColorInvertControl from './ColorInvertControl';
import PatternSelection from './PatternSelection';
import './ControlBlock.css';

@inject('AppStore', 'FloorStore')
@observer export default class ControlBlock extends Component {
  render() {
    return (
      <div className="control-block">
        <PatternSelection />
        <PlayControl />
        <SpeedControl />
        <PulseControl />
        <ColorInvertControl />
      </div>
    )
  }
}