import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TileRow from '../../../Floor/TileRow';
import '../../../Floor/Floor.css'

@inject('BuilderStore')
@observer
class BuilderFloor extends Component {
  render() {
    const tileRows = this.props.BuilderStore.frameData.map((row, idx) => {
      return (
        <TileRow
          tiles={row}
          rowNum={idx + 1}
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
