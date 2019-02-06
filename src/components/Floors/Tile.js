import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { tileTemplates } from '../../data/tileTemplates';
import './Tile.css'

@inject('AppStore')
@observer
class Tile extends Component {
  state = {
    tile: 1,
  }
  incOrDecTile = (isShiftPressed) => {
    if (isShiftPressed) {
      const decValue = this.state.tile ===  1 ? 20 : this.state.tile - 1;
      this.setState({ tile: decValue });
    } else {
      const incValue = this.state.tile === 20 ? 1 : this.state.tile + 1;
      this.setState({ tile: incValue });
    }

    this.props.setTile(this.props.frameAddress, this.state.tile);
  }

  swapTile = (event) => {
    let shiftKey = event.shiftKey;

    if (this.props.AppStore.containerName === 'Builder') {
      const newVal = this.state.tile === 20 ? 1 : this.state.tile + 1;
      this.incOrDecTile(shiftKey);
    }
    return false;
  }

  getTileClass = (tile = { color: this.props.color, isLit: this.props.isLit }) => {
    const colorClass = `dance-floor__tile--${tile.color}`;
    const isLitClass = `dance-floor__tile--${tile.isLit ? 'lit' : 'unlit'}`;

    return `dance-floor__tile ${colorClass} ${isLitClass}`;
  }

  render() {
    const tileClasses = this.props.AppStore.containerName === 'Builder'
      ? this.getTileClass(tileTemplates[this.state.tile])
      : this.getTileClass();
    
    return(
      <div onClick={this.swapTile} className={tileClasses} />
    )
  }
}

export default Tile;
