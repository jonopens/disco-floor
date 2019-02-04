import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './PatternSelection.css';
import patterns from '../../data/patterns';

@inject('AppStore', 'PlayerStore')
@observer
export default class PatternSelection extends Component {
  handleSelectionChange = (e) => {
    e.preventDefault();
    // always reset currentFrame to 0 after selection change
    // some patterns have fewer frames than each other
    this.props.PlayerStore.setCurrentFrame(0);
    this.props.PlayerStore.setSelectedPattern(e.target.value);
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
