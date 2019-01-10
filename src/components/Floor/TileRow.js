import React, { Component } from 'react';
import Tile from './Tile';
import './TileRow.css';

class TileRow extends Component {
  render() {
    const tiles = this.props.tiles.map((tile, idx) => {
      return (
        <Tile
          color={tile.color}
          isLit={tile.isLit}
          key={`coord-${this.props.rowNum}-${idx}`}
        />
      );
    });
    
    return(
      <div className="dance-floor__row">
        {tiles}
      </div>
    )
  }
}

export default TileRow;
