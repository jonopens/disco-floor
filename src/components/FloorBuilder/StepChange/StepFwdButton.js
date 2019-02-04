import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BuilderStore')
@observer
export default class StepFwdButton extends Component {
  handleClick = () => {
    if (this.props.disabled) {
      return;
    }
    const currentStep = this.props.BuilderStore.builderStep;
    this.props.BuilderStore.setBuilderStep(currentStep + 1)
  }

  render() {
    const disabledClass = this.props.disabled ? ' step-change__button--disabled' : '';
    return (
      <div 
        onClick={this.handleClick}
        className={`step-change__button${disabledClass}`}
      >
        <span>FORWARD</span>
      </div>
    );
  }
}
