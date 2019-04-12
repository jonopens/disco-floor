import React, { Component } from 'react';
import './Restart.css';

export default class Restart extends Component {
  reloadApp = () => {
    window.location.reload();
  } 

  render() {
    return (
      <div className="restart">
        <button 
          name="restart"
          className="restart__button"
          onClick={this.reloadApp}
        >
          Reload &amp; Play
        </button>
      </div>
    );
  }
}