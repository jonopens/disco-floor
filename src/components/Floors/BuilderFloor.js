import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TileRow from './TileRow';
import './Floor.css'

@inject('BuilderStore')
@observer
class BuilderFloor extends Component {
  constructor(props) {
    super(props)
    this.currentFrame = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
  }

  setTileValue = (arrayAddress, templateNumber) => {
    this.currentFrame[arrayAddress[0]][arrayAddress[1]] = templateNumber;
  }

  render() {
    const tileRows = this.currentFrame.map((row, idx) => {
      return (<TileRow
        tiles={row}
        rowNum={idx + 1}
        key={`tile-row-${idx}`}
        setTile={this.setTileValue}
      />);
    });

    return (
      <div className="dance-floor">
        {tileRows}
      </div>
    )
  }
}

export default BuilderFloor;
