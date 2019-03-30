import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { TILE_REFERENCE } from '../../data/reference';
import Tile from './Tile';
import './TileRow.css';

@inject('PlayerStore')
@observer
class TileRow extends Component {
  remapTileNumbers = (tiles, callback) => {
    return tiles.map(t => callback(t, TILE_REFERENCE[t].isLit));
  }

  determineTiles = (tiles) => {
    if (!this.props.PlayerStore.showingPlayer) {
      // if we're not in the player/in the builder, just use the tiles we're given
      return tiles;
    }

    const {
      isPulsingOn,
      isColorInverted,
      shouldFlipTileLighting,
      pulseAndInvert,
      invertColor,
      pulseTile,
    } = this.props.PlayerStore;

    if (isPulsingOn && isColorInverted) {
      if (shouldFlipTileLighting) {
        return this.remapTileNumbers(tiles, invertColor);
      }
      return this.remapTileNumbers(tiles, pulseAndInvert);
    }
    else if (isPulsingOn && !isColorInverted) {
      if (shouldFlipTileLighting) {
        return tiles;
      }
      return this.remapTileNumbers(tiles, pulseTile);
    }
    else if (!isPulsingOn && isColorInverted) {
      return this.remapTileNumbers(tiles, invertColor);
    }
    else {
      return tiles;
    }
  }

  makeTiles = (tiles) => {
    const tileSize = (this.props.PlayerStore.showingPlayer ? 585 : 495) / tiles.length;
    const adjustedTiles = this.determineTiles(tiles);

    return adjustedTiles.map((tile, idx) => {
      return (
        <Tile
          frameAddress={[this.props.rowNum, idx]}
          color={TILE_REFERENCE[tile].color}
          isLit={TILE_REFERENCE[tile].isLit}
          key={`coord-${this.props.rowNum}-${idx}`}
          size={tileSize}
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
