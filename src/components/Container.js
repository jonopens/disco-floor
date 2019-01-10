import React, { Component } from 'react';
import ControlBlock from './ControlBlock/ControlBlock';
import Floor from './Floor/Floor';
import './Container.css';

class Container extends Component {
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
