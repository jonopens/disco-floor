import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './Arrows.css';

@inject('BuilderStore')
@observer
export default class NextFrameArrow extends Component {
  handleClick = (e) => {
    e.preventDefault();
    if (this.props.BuilderStore.hasNextFrame) {
      this.props.BuilderStore.goToNextFrame();
    }
  }
  
  render() {
    const inactiveClass = this.props.BuilderStore.hasNextFrame ? null : 'arrow__inactive';
    return (
      <div
        onClick={this.handleClick}
        className={`arrow arrow__prev ${inactiveClass}`}
      >
        NEXT
      </div>
    )

  }
}