import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TileRow from './TileRow';
import patterns from '../../data/patterns';
import './Floor.css'

@inject('PlayerStore')
@observer
class PlayerFloor extends Component {

  render() {
    const frame = this.props.PlayerStore.currentFrame;
    const pattern = this.props.PlayerStore.selectedPattern;
    const tileRows = patterns[pattern][frame].map((row, idx) => {
      return <TileRow tiles={row} rowNum={idx + 1} key={`tile-row-${idx}`} />
    });

    return(
      <div className="dance-floor">
        {tileRows}
      </div>
    )
  }
}

export default PlayerFloor;
