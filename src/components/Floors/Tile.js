import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { tileTemplates } from '../../data/tileTemplates';
import './Tile.css'

@inject('AppStore')
@observer
class Tile extends Component {
  state = {
    templateIndex: 1,
  }
  incOrDecTile = (isShiftPressed) => {
    if (isShiftPressed) {
      const decValue = this.state.templateIndex ===  1 ? 20 : this.state.templateIndex - 1;
      this.setState({ tile: decValue });
    } else {
      const incValue = this.state.templateIndex === 20 ? 1 : this.state.templateIndex + 1;
      this.setState({ tile: incValue });
    }

    this.props.setTile(this.props.frameAddress, this.state.templateIndex);
  }

  swapTile = (event) => {
    // if shift key is pressed, send to incOrDecTile
    if (this.props.AppStore.containerName === 'Builder') {
      const newVal = this.state.templateIndex === 20 ? 1 : this.state.templateIndex + 1;
      this.incOrDecTile(event.shiftKey);
    }
    return false;
  }

  getTileClass = (tile = { color: this.props.color, isLit: this.props.isLit }) => {
    const colorClass = `dance-floor__tile--${tile.color}`;
    const isLitClass = `dance-floor__tile--${tile.isLit ? 'lit' : 'unlit'}`;
    const miniClass = this.props.AppStore.containerName === 'Builder'
      ? 'dance-floor__tile--mini'
      : '';

    return `dance-floor__tile ${miniClass} ${colorClass} ${isLitClass}`;
  }

  render() {
    const tileClasses = this.props.AppStore.containerName === 'Builder'
      ? this.getTileClass(tileTemplates[this.state.templateIndex])
      : this.getTileClass();
    
    return(
      <div onClick={this.swapTile} className={tileClasses} />
    )
  }
}

export default Tile;
