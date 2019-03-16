import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import FloorSizeSelection from './FloorSizeSelection';

import '../Steps.css';

@inject('BuilderStore', 'AppStore')
@observer
export default class StepOne extends Component {
  makeFloorSizeSelections = () => {
    return [9, 10, 11, 13].map((size, idx) => {
      return <FloorSizeSelection key={`size-${idx + 1}`} size={size} />;
    });
  }

  render() {
    const floorSizes = this.makeFloorSizeSelections();

    if (this.props.BuilderStore.builderStep === 1) {
      return (
        <div className="step step__one">
          {floorSizes}
        </div>
      );
    }
    return null;
  }
}
