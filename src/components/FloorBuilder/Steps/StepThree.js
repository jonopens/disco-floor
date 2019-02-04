import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './StepThree.css';

@inject('BuilderStore', 'AppStore')
@observer
export default class StepThree extends Component {
  render() {
    if (this.props.BuilderStore.builderStep === 3) {
      return (
        <div>
          <p>POOT 3</p>
        </div>
      );
    }
    return null;
  }
}
