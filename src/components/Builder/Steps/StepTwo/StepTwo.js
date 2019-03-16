import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import BuilderFloor from './BuilderFloor';
import '../Steps.css';

@inject('BuilderStore')
@observer
export default class StepTwo extends Component {
  render() {
    if (this.props.BuilderStore.builderStep === 2) {
      return (
        <div className="step step__two">
          <BuilderFloor />
        </div>
      );
    }
    return null;
  }
}
