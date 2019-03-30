import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { TILE_REFERENCE } from '../../data/reference';

import './Tile.css'

@inject('PlayerStore', 'BuilderStore')
@observer
class Tile extends Component {
  state = {
    templateIndex: 1,
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.BuilderStore.shouldResetBuilderTiles 
        && this.state.templateIndex !== 1
    ) {
      this.setState({ templateIndex: 1 });
    }
  }

  incOrDecTile = (isShiftPressed) => {
    if (isShiftPressed) {
      const decValue = this.state.templateIndex ===  1 ? 20 : this.state.templateIndex - 1;
      this.setState({ templateIndex: decValue });
    } else {
      const incValue = this.state.templateIndex === 20 ? 1 : this.state.templateIndex + 1;
      this.setState({ templateIndex: incValue });
    }
    
    this.props.BuilderStore.setTileInFrame(
      this.props.frameAddress,
      this.state.templateIndex
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
    let tileClasses = this.props.PlayerStore.showingPlayer
      ? this.getTileClass()
      : this.getTileClass(TILE_REFERENCE[this.state.templateIndex]);
    
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
