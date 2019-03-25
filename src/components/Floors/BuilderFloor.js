import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TileRow from './TileRow';
import './Floor.css'

@inject('BuilderStore')
@observer
class BuilderFloor extends Component {

  render() {
    const tileRows = this.props.BuilderStore.frameData.map((row, idx) => {
      return (
        <TileRow
          tiles={row}
          rowNum={idx}
          key={`tile-row-${idx + 1}`}
        />
      );
    });

    return (
      <div className="dance-floor">
        {tileRows}
      </div>
    )
  }
}

export default BuilderFloor;
