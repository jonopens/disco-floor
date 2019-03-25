import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import FrameButton from './FrameButton';
import './BuilderTopControls.css';

@inject('BuilderStore')
@observer
class BuilderTopControls extends Component {
  render() {
    const topControls = this.props.BuilderStore.builderStep !== 2
        ? null
        : (
          <React.Fragment>
            <FrameButton type="add" />
            <FrameButton type="remove" />
            <FrameButton type="reset" />
          </React.Fragment>
        );

    return (
      <div className="builder-top-controls">
        {topControls}
      </div>
    );
  }
}

export default BuilderTopControls;
