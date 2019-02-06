import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './Steps.css';

@inject('BuilderStore', 'AppStore')
@observer
export default class StepOne extends Component {
  handleClick = (e) => {
    const dimensionChoice = e.target.value.split(',');
    if (dimensionChoice !== this.props.BuilderStore.builder) {
      this.props.BuilderStore.setFloorDimensions(dimensionChoice);
      return true;
    }
    return false;
  }
  render() {
    if (this.props.BuilderStore.builderStep === 1) {
      return (
        <div className="step step__one">
          
        </div>
      );
    }
    return null;
  }
}
