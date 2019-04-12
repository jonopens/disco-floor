import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import FloorSizeSelection from '../../Controls/FloorSizeSelection/FloorSizeSelection';

import './Steps.css';

@inject('BuilderStore')
@observer
export default class StepOne extends Component {

  componentDidMount() {
    if (this.props.BuilderStore.totalWorkingFrames < 1) {
      this.props.BuilderStore.addFrame();
    }
  }

  makeFloorSizeSelections = () => {
    return [9, 10, 11, 13].map((size, idx) => {
      return <FloorSizeSelection key={`size-${idx + 1}`} size={size} />;
    });
  }

  render() {
    const floorSizes = this.makeFloorSizeSelections();

    return (
      <div className="step step__one">
        {floorSizes}
      </div>
    );
  }
}
