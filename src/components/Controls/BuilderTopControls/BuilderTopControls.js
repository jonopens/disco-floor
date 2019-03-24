import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './BuilderTopControls.css';

@inject('BuilderStore')
class BuilderTopControls extends Component {
  render() {
    const topControls = this.props.BuilderStore.builderStep !== 2
        ? null
        : (
          <div>HELLO</div>
        )

    return (
      <div className="builder-top-controls">
        {topControls}
      </div>
    );
  }
}

export default BuilderTopControls;
