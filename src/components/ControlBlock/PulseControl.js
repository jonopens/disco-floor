import React from 'react';
import { observer, inject } from 'mobx-react';
import Toggle from '../Common/Toggle';

@inject('AppStore', 'FloorStore')
@observer
class PulseControl extends React.Component {
  togglePulsing = () => {
    this.props.AppStore.setIsPulsingOn(!this.props.AppStore.isPulsingOn);
  }

  render() {
    return (
      <div className="control-block__item  control-block__item--pulse">
        <Toggle
          name="pulse"
          handleChange={this.togglePulsing}
          toggleState={this.props.AppStore.isPulsingOn} 
        />
      </div>
    )
  }
}

export default PulseControl;