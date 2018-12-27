import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './PatternSelection.css';
import patterns from '../../logic/patterns';

@inject('AppStore', 'FloorStore')
@observer
export default class PatternSelection extends Component {
  handleSelectionChange = (e) => {
    e.preventDefault();
    // always reset currentFrame to 0 after selection change
    // some patterns have fewer frames than each other
    this.props.FloorStore.setCurrentFrame(0);
    this.props.FloorStore.setSelectedPattern(e.target.value);
  }
  render() {
    const patternOptions = Object.keys(patterns).map((pattern, idx) => {
      return <option value={pattern} key={`pattern-${pattern}-${idx}`}>{pattern}</option>
    });

    return(
      <div className="control-block__item control-block__item--pattern-select">
        <label className="pattern-select__label">CHOOSE A PARTY</label>
        <select
          className="pattern-select__selection"
          onChange={this.handleSelectionChange}
          disabled={this.props.AppStore.isPlaying}
        >
          {patternOptions}
        </select>
      </div>
    );
  }
}
