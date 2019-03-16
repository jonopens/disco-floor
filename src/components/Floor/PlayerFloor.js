import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TileRow from './TileRow';
import patterns from '../../data/patterns';
import './Floor.css'

@inject('PlayerStore')
@observer
class PlayerFloor extends Component {

  aggregatePatterns = () => {
    const localPatterns = JSON.parse(localStorage.getItem("patterns"));
    return Object.assign({}, localPatterns, patterns);
  }

  makeRows = () => {
    const frame = this.props.PlayerStore.currentFrame;
    const pattern = this.props.PlayerStore.selectedPattern;
    const allPatterns = !!localStorage.getItem("patterns")
      ? this.aggregatePatterns()
      : patterns;

    return allPatterns[pattern][frame].map((row, idx) => {
      return <TileRow tiles={row} rowNum={idx + 1} key={`tile-row-${idx}`} />
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
