import React from 'react';
import './Tile.css'

class Tile extends React.Component {

  getTileClass = () => {
    const colorClass = `dance-floor__tile--${this.props.color}`;
    const isLitClass = `dance-floor__tile--${this.props.isLit}`;

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
