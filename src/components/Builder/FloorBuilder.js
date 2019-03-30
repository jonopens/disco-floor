import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import StepOne from './Steps/StepOne/StepOne';
import StepTwo from './Steps/StepTwo/StepTwo';
import StepThree from './Steps/StepThree/StepThree';
import StepChangeSwitch from '../Controls/StepChange/StepChangeSwitch';
import './FloorBuilder.css';

@inject('BuilderStore')
@observer
class FloorBuilder extends Component {
  stepSwitch = () => {
    switch(this.props.BuilderStore.builderStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      default:
        return <StepThree />;
    }
  }
  
  render() {
    const currentStep = this.stepSwitch();
    return (
      <div className="floor-builder">
        {currentStep}
        <StepChangeSwitch />
      </div>
    );
  }
}

export default FloorBuilder;
