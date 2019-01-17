import React from 'react';
import BuilderSwitch from './BuilderSwitch/BuilderSwitch';
import './Header.css';

const Header = () => {
  return (
    <React.Fragment>
      <h1 className="header">DISCO FLOOR PLAYER & BUILDER</h1>
      <BuilderSwitch />
    </React.Fragment>
  )
}

export default Header;