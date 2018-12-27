import React from 'react';
import './Container.css';
import Floor from './Floor/Floor';
import ControlBlock from './ControlBlock/ControlBlock';

class Container extends React.Component {
  render() {
    return(
      <div className="container">
        <ControlBlock />
        <Floor />
      </div>
    )
  }
}

export default Container;
