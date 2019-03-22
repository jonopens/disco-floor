import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import SpeedControl from './SpeedControls/SpeedControl';
import PlayControl from './PlayControl/PlayControl';
import PulseControl from './PulseControl/PulseControl';
import ColorInvertControl from './ColorInvert/ColorInvertControl';
import PatternSelection from './PatternSelect/PatternSelection';
import './PlayerControls.css';

@inject('AppStore', 'PlayerStore')
@observer export default class PlayerControls extends Component {
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