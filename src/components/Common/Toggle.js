import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
  render() {
    return (
      <div className="toggle">
        <p className="toggle__title">{this.props.title}</p>
        <input 
          type="checkbox"
          id={`switch-${this.props.name}`}
          className="toggle__checkbox"
          checked={this.props.toggled}
          onChange={this.props.toggleAction} 
        />
        <label className="toggle__label" htmlFor={`switch-${this.props.name}`} />
      </div>
    );
  }
}

export default Toggle;
