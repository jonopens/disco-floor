import React from 'react';
import BuilderTopControl from '../Controls/BuilderTopControls/BuilderTopControls';
import './Header.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <h1 className="header">{props.headerText}</h1>
      <BuilderTopControl />
    </React.Fragment>
  )
}

export default Header;