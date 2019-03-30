import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { TILE_REFERENCE } from '../../data/reference';

import './Tile.css'

@inject('PlayerStore', 'BuilderStore')
@observer
class Tile extends Component {

  incOrDecTile = (isShiftPressed) => {
    const tileRef = this.props.BuilderStore.tileIndexAtAddress(this.props.frameAddress);
    let newValue;

    if (isShiftPressed) {
      newValue = tileRef ===  1 ? 20 : tileRef - 1;
    } else {
      newValue = tileRef === 20 ? 1 : tileRef + 1;
    }
    
    this.props.BuilderStore.setTileInFrame(
      this.props.frameAddress,
      newValue
    );
  }

  swapTile = (event) => {
    // if shift key is pressed, send to incOrDecTile
    if (this.props.PlayerStore.showingPlayer) {
      return false;
    }
    this.incOrDecTile(event.shiftKey);
  }

  getTileClass = (tile = { color: this.props.color, isLit: this.props.isLit }) => {
    const colorClass = `dance-floor__tile--${tile.color}`;
    const isLitClass = `dance-floor__tile--${tile.isLit ? 'lit' : 'unlit'}`;
    const miniClass = this.props.PlayerStore.showingPlayer
      ? ''
      : 'dance-floor__tile--mini';

    return `dance-floor__tile ${miniClass} ${colorClass} ${isLitClass}`;
  }

  render() {
    const tileRef = this.props.BuilderStore.tileIndexAtAddress(this.props.frameAddress);
    const tileClasses = this.props.PlayerStore.showingPlayer
      ? this.getTileClass()
      : this.getTileClass(TILE_REFERENCE[tileRef]);
    
    return(
      <div
        style={{ width: this.props.size, height: this.props.size }}
        onClick={this.swapTile}
        className={tileClasses}
      />
    )
  }
}

export default Tile;
