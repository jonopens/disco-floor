import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import FrameButton from './FrameButton';
import './BuilderTopControls.css';

@inject('BuilderStore')
@observer
class BuilderTopControls extends Component {
  render() {
    const topControls = this.props.BuilderStore.shouldShowTopControls
        ? (
          <div className="builder-top-controls">
            <FrameButton type="add" />
            <FrameButton type="remove" />
            <FrameButton type="reset" />
          </div>
        )
        : null;

    return (
      <React.Fragment>
        {topControls}
      </React.Fragment>
    );
  }
}

export default BuilderTopControls;
