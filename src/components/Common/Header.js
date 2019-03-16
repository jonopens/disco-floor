import React from 'react';
import BuilderSwitch from '../Controls/BuilderSwitch/BuilderSwitch';
import './Header.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <h1 className="header">{props.headerText}</h1>
      <BuilderSwitch />
    </React.Fragment>
  )
}

export default Header;