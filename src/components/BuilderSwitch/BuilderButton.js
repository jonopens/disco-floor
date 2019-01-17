import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './BuilderButton';

@inject('AppStore')
@observer
class BuilderButton extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.AppStore.setContainerName(this.props.name);
  }

  render() {
    const selected = this.props.AppStore.isSelectedSwitch(this.props.name)
      ? 'builder-switch__option--selected'
      : 'builder-switch__option--not-selected';

    return (
      <div 
        className={`builder-switch__option ${selected}`}
        onClick={this.handleClick}
      >
        {this.props.name}
      </div>
    );
  }
}

export default BuilderButton;