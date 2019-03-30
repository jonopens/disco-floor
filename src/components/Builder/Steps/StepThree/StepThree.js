import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import '../Steps.css';

@inject('BuilderStore')
@observer
export default class StepThree extends Component {
  render() {
    return (
      <div>
        <p>POOT 3</p>
      </div>
    );
  }
}
