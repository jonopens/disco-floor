import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Toggle from '../../../Common/Toggle';

@inject('PlayerStore')
@observer
class ColorInvertControl extends Component {
  toggleColorInversion = () => {
    this.props.PlayerStore.setIsColorInverted(!this.props.PlayerStore.isColorInverted);
  }

  render() {
    return (
      <div className="control-block__item  control-block__item--pulse">
        <Toggle
          name="color-invert"
          title="Invert Colors"
          toggleAction={this.toggleColorInversion}
          toggled={this.props.PlayerStore.isColorInverted}
        />
      </div>
    )
  }
}

export default ColorInvertControl;