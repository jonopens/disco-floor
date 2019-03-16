import React, { Component } from 'react';
import BuilderButton from './BuilderButton';
import './BuilderSwitch.css';


class BuilderSwitch extends Component {
  render() {
    return (
      <div className="builder-switch">
        <BuilderButton name="Player" />
        <BuilderButton name="Builder" />
      </div>
    );
  }
}

export default BuilderSwitch;
