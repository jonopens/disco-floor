import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './Tile.css'

@inject('AppStore')
@observer
class Tile extends Component {
  getTileClass = () => {
    const colorClass = `dance-floor__tile--${this.props.color}`;
    const isLitClass = `dance-floor__tile--${this.props.isLit ? 'lit' : 'unlit'}`;

    return `dance-floor__tile ${colorClass} ${isLitClass}`;
  }

  render() {
    const tileClasses = this.getTileClass();
    
    return(
      <div className={tileClasses} />
    )
  }
}

export default Tile;
