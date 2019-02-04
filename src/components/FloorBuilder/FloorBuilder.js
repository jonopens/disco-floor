import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import StepChangeSwitch from './StepChange/StepChangeSwitch';
import './FloorBuilder.css';

@inject('BuilderStore', 'AppStore')
@observer
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
