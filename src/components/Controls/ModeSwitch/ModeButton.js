import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('PlayerStore')
@observer
class ModeButton extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.PlayerStore.setContainerName(this.props.name);
  }

  render() {
    const selected = this.props.PlayerStore.isSelectedSwitch(this.props.name)
      ? 'mode-switch__option--selected'
      : 'mode-switch__option--not-selected';

    return (
      <div
        className={`mode-switch__option ${selected}`}
        onClick={this.handleClick}
      >
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default ModeButton;