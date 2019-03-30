import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './BuilderTopControls.css';

@inject('BuilderStore')
@observer
class FrameButton extends Component {
  getButtonText = () => {
    switch (this.props.type) {
      case "add":
        return "ADD FRAME";
      case "remove":
        return "REMOVE FRAME";
      default:
        return "RESET PATTERN";
    }
  }

  handleClick = () => {
    switch (this.props.type) {
      case "add":
        this.props.BuilderStore.addFrameToPattern();
        break;
      case "remove":
        if (this.props.BuilderStore.totalWorkingFrame > 1) {
          this.props.BuilderStore.removeFrameFromPattern();
        }
        break;
      default:
        const confirmed = confirm('Are you sure you want to reset your pattern?');
        if (confirmed) {
          this.props.BuilderStore.resetWorkingPattern();
          break;
        }
        return false;
    }
  }

  render() {
    const text = this.getButtonText();
    return (
      <div
        className="builder-top-controls__button"
        onClick={this.handleClick}
      >
       {text}
      </div>
    );
  }
}

export default FrameButton;