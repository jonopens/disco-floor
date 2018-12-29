import React, { Component } from 'react';
import './Toggle.css';

const Toggle = (props) => {
  return (
    <div className="toggle">
      <input 
        type="checkbox"
        id={`switch-${props.name}`}
        className="toggle__checkbox"
        checked={props.toggleState}
        onChange={props.handleChange} 
      />
      <label className="toggle__label" htmlFor={`switch-${props.name}`} />
    </div>
  );
}

export default Toggle;
