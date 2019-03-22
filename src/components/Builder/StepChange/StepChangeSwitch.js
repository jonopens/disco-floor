import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import StepFwdButton from './StepFwdButton';
import StepBackButton from './StepBackButton';

import './StepChangeSwitch.css';

@inject('BuilderStore')
@observer
export default class StepChangeSwitch extends Component {
  shouldDisableFwd = () => {
    return (
      this.props.BuilderStore.builderStep === 3
        || (this.props.BuilderStore.builderStep === 2 && !this.props.BuilderStore.hasFrames)
    );
  }
  
  render() {
    const disableFwdButton = this.shouldDisableFwd();

    return (
      <div className="step-change step-change__switch">
        <StepBackButton disabled={this.props.BuilderStore.builderStep === 1} />
        <StepFwdButton disabled={disableFwdButton} />
      </div>
    );
  }
}
