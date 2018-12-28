import React, { Component } from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className={props.buttonClass} onClick={props.handleClick}>
      <span>{props.buttonText}</span>
    </button>
  )
}

export default Button;