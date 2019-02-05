import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Tile from './Tile';
import { tileTemplates, invertColor } from '../../data/tileTemplates';
import './TileRow.css';

@inject('AppStore')
@observer
class TileRow extends Component {
  makeTiles = (tileNumbersArray) => {
    const adjustedTileArray = this.props.AppStore.isColorInverted 
      ? tileNumbersArray.map(tile => invertColor(tile))
      : tileNumbersArray;

    return adjustedTileArray.map((tileNumber, idx) => {
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
