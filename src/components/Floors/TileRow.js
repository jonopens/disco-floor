import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Tile from './Tile';
import './TileRow.css';
import { TILE_REFERENCE } from '../../data/reference';

@inject('AppStore', 'PlayerStore')
@observer
class TileRow extends Component {
  remapTileNumbers = (tiles, callback) => {
    return tiles.map(t => callback(t, TILE_REFERENCE[t].isLit));
  }

  determineTiles = (tiles) => {
    const { isPulsingOn, isColorInverted } = this.props.AppStore;
    const { invertColor, pulseTile, pulseAndInvert } = this.props.PlayerStore

    if (isPulsingOn && isColorInverted) {
      return this.remapTileNumbers(tiles, pulseAndInvert);
    } else if (!isPulsingOn && isColorInverted) {
      return this.remapTileNumbers(tiles, invertColor);
    } else if (isPulsingOn && !isColorInverted) {
      return this.remapTileNumbers(tiles, pulseTile);
    } else {
      return tiles;
    }
  }

  makeTiles = (tiles) => {
    let adjustedTiles = this.determineTiles(tiles)

    return adjustedTiles.map((tile, idx) => {
      return (
        <Tile
          frameAddress={[this.props.rowNum, idx]}
          color={TILE_REFERENCE[tile].color}
          isLit={TILE_REFERENCE[tile].isLit}
          key={`coord-${this.props.rowNum}-${idx}`}
        />
      );
    });
  }

  render() {
    const tiles = this.makeTiles(this.props.tiles);
    return(
      <div className="dance-floor__row">
        {tiles}
      </div>
    )
  }
}

export default TileRow;
