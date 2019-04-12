import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import AddPatternForm from './AddPatternForm';
import Restart from './Restart';

import './Steps.css';

@inject('BuilderStore')
@observer
export default class StepThree extends Component {
  render() {
    const addPatternOrRestart = this.props.BuilderStore.hasSavedPattern
      ? <Restart />
      : <AddPatternForm />;

    return (
      <div className="step step__three">
        {addPatternOrRestart}
      </div>
    );
  }
}
