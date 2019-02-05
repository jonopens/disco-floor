import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import BuilderFloor from '../../Floors/BuilderFloor';
import './Steps.css';

@inject('BuilderStore', 'AppStore')
@observer
export default class StepOne extends Component {
  render() {
    if (this.props.BuilderStore.builderStep === 1) {
      return (
        <div className="step step__one">
          <BuilderFloor />
        </div>
      );
    }
    return null;
  }
}
