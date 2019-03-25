import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Toggle from '../../../Common/Toggle';

@inject('PlayerStore')
@observer
class PulseControl extends Component {

  togglePulsing = () => {
    this.props.PlayerStore.setIsPulsingOn(!this.props.PlayerStore.isPulsingOn);
  }

  render() {
    return (
      <div className="control-block__item  control-block__item--pulse">
        <Toggle
          name="pulse"
          title="Pulse Control"
          toggleAction={this.togglePulsing}
          toggled={this.props.PlayerStore.isPulingOn}
        />
      </div>
    )
  }
}

export default PulseControl;