import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './Arrows.css';

@inject('BuilderStore')
@observer
export default class PrevFrameArrow extends Component {
  handleClick = (e) => {
    e.preventDefault();
    if (this.props.BuilderStore.hasPrevFrame) {
      this.props.BuilderStore.goToPreviousFrame();
    }
  }

  render() {
    const inactiveClass = this.props.BuilderStore.hasPrevFrame ? null : 'arrow__inactive';
    return (
      <div
        onClick={this.handleClick}
        className={`arrow arrow__prev ${inactiveClass}`}
      >
        PREV
      </div>
    )
  }
}
