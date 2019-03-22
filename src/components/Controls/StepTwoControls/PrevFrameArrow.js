import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './Arrows.css';

@inject('BuilderStore')
@observer
export default class PrevFrameArrow extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.BuilderStore.previousWorkingFrame();
  }

  render() {
    if (this.props.BuilderStore.hasPrevFrame) {
      return (
        <div
          onClick={this.handleClick}
          className="arrow arrow__prev"
        >
          PREV
        </div>
      )
    }
    return <div />;
  }
}
