import React, { Component } from 'react';
import ModeButton from './ModeButton';
import './ModeSwitch.css';


class ModeSwitch extends Component {
  render() {
    return (
      <div className="mode-switch">
        <span className="mode-switch__header">Mode Toggle</span>
        <ModeButton name="Player" />
        <ModeButton name="Builder" />
      </div>
    );
  }
}

export default ModeSwitch;
