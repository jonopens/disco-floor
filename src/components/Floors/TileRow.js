import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Tile from './Tile';
import { 
  tileTemplates,
  invertColor,
  pulseTile,
  pulseAndInvert,
} from '../../data/tileTemplates';
import './TileRow.css';

@inject('AppStore')
@observer
class TileRow extends Component {
  remapTileNumbers = (tiles, callback) => {
    return tiles.map(t => callback(t, tileTemplates[t].isLit));
  }

  makeTiles = (tileNumbers) => {
    const { isPulsingOn, isColorInverted } = this.props.AppStore;
    let adjustedTiles;

    if (isPulsingOn && isColorInverted) {
      adjustedTiles = this.remapTileNumbers(tileNumbers, pulseAndInvert);
    } else if (!isPulsingOn && isColorInverted) {
      adjustedTiles = this.remapTileNumbers(tileNumbers, invertColor);
    } else if (isPulsingOn && !isColorInverted) {
      adjustedTiles = this.remapTileNumbers(tileNumbers, pulseTile);
    } else {
      adjustedTiles = tileNumbers;
    }

    return adjustedTiles.map((tileNumber, idx) => {
      return (
        <Tile
          setTile={this.props.setTile}
          frameAddress={[this.props.rowNum, idx]}
          color={tileTemplates[tileNumber].color}
          isLit={tileTemplates[tileNumber].isLit}
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
