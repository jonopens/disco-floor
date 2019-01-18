import React, { Component } from 'react';
import './Tile.css'

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
