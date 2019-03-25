import React, { Component } from 'react';

import StepOne from './Steps/StepOne/StepOne';
import StepTwo from './Steps/StepTwo/StepTwo';
import StepThree from './Steps/StepThree/StepThree';
import StepChangeSwitch from './StepChange/StepChangeSwitch';
import './FloorBuilder.css';

class FloorBuilder extends Component {
  render() {
    return (
      <div className="floor-builder">
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepChangeSwitch />
      </div>
    );
  }
}

export default FloorBuilder;
