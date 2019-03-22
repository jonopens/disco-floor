import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './Arrows.css';

@inject('BuilderStore')
@observer
export default class NextFrameArrow extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.BuilderStore.nextWorkingFrame();
  }
  
  render() {
    if (this.props.BuilderStore.hasNextFrame) {
      return (
        <div
          onClick={this.handleClick}
          className="arrow arrow__next"
        >
          NEXT
        </div>
      )
    }
    return <div />;
  }
}