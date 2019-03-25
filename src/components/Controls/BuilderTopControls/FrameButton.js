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

  getClickHandler = () => {
    switch (this.props.type) {
      case "add":
        return () => { 
          this.props.BuilderStore.addFrameToPattern();
        };
      case "remove":
        return () => { this.props.BuilderStore.removeFrameFromPattern() };
      default:
        return () => { 
          const confirmed = confirm('Are you sure you want to reset your pattern?');
          if (confirmed) {
            this.props.BuilderStore.resetWorkingPattern();
            return;
          }
          return false;
        };
    }
  }
  
  wrapClickHandler = (event) => {
    event.preventDefault();
    this.getClickHandler()();
  }

  render() {
    const text = this.getButtonText();

    return (
      <div
        className="builder-top-controls__button"
        onClick={this.wrapClickHandler}
      >
       {text}
      </div>
    );
  }
}

export default FrameButton;