import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import BuilderFloor from '../../../Floors/BuilderFloor';
import PrevFrameArrow from '../../../Controls/StepTwoControls/PrevFrameArrow';
import NextFrameArrow from '../../../Controls/StepTwoControls/NextFrameArrow';
import '../Steps.css';

@inject('BuilderStore')
@observer
export default class StepTwo extends Component {
  render() {
    if (this.props.BuilderStore.builderStep === 2) {
      return (
        <div className="step step__two">
          <PrevFrameArrow />
          <BuilderFloor />
          <NextFrameArrow />
        </div>
      );
    }
    return null;
  }
}
