import React, { Component } from 'react';
import Tile from './Tile';
import tileTemplates from '../../data/tileTemplates';
import './TileRow.css';

class TileRow extends Component {
  render() {
    const tiles = this.props.tiles.map((tile, idx) => {
      return (
        <Tile
          color={tileTemplates[tile].color}
          isLit={tileTemplates[tile].isLit}
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
