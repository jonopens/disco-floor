import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Toggle from '../Common/Toggle';

@inject('AppStore', 'FloorStore')
@observer
class PulseControl extends Component {

  togglePulsing = () => {
    this.props.AppStore.setIsPulsingOn(!this.props.AppStore.isPulsingOn);
  }

  render() {
    return (
      <div className="control-block__item  control-block__item--pulse">
        <Toggle
          name="pulse"
          title="Pulse Control"
          toggleAction={this.togglePulsing}
          toggled={this.props.AppStore.isPulingOn}
        />
      </div>
    )
  }
}

export default PulseControl;