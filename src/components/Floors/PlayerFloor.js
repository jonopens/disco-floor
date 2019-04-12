import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TileRow from './TileRow';
import patterns from '../../data/patterns';
import './Floor.css'

@inject('PlayerStore')
@observer
class PlayerFloor extends Component {
  makeRows = () => {
    const frame = this.props.PlayerStore.currentFrame;
    const pattern = this.props.PlayerStore.selectedPattern;
    const allPatterns = !!localStorage.getItem("patterns")
      ? this.props.PlayerStore.aggregatePatterns()
      : patterns;
    console.log(allPatterns)
    return allPatterns[pattern][frame].map((row, idx) => {
      return <TileRow tiles={row} rowNum={idx} key={`tile-row-${idx}`} />
    });
  }

  render() {
    const tileRows = this.makeRows();

    return(
      <div className="dance-floor">
        {tileRows}
      </div>
    )
  }
}

export default PlayerFloor;
