import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './StepOne.css';

@inject('BuilderStore', 'AppStore')
@observer
export default class StepOne extends Component {
  render() {
    if (this.props.BuilderStore.builderStep === 1) {
      return (
        <div>
          <p>POOT 1</p>
        </div>
      );
    }
    return null;
  }
}
