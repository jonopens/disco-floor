import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import StepFwdButton from './StepFwdButton';
import StepBackButton from './StepBackButton';

import './StepChangeSwitch.css';

@inject('BuilderStore')
@observer
export default class StepChangeSwitch extends Component {
  render() {
    return (
      <div className="step-change step-change__switch">
        <StepBackButton disabled={this.props.BuilderStore.builderStep === 1} />
        <StepFwdButton disabled={this.props.BuilderStore.builderStep === 3} />
      </div>
    );
  }
}
