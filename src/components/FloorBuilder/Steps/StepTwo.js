import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './Steps.css';

@inject('BuilderStore', 'AppStore')
@observer
export default class StepTwo extends Component {
  render() {
    if (this.props.BuilderStore.builderStep === 2) {
      return (
        <div>
          <p>POOT 2</p>
        </div>
      );
    }
    return null;
  }
}
