import React, { Component } from 'react';
import Header from './components/Common/Header';
import Container from './components/Common/Container';
import ModeSwitch from './components/Controls/ModeSwitch/ModeSwitch';

import './App.css';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Header headerText="DISCO FLOOR PLAYER & BUILDER" />
        <Container />
        <ModeSwitch />
      </React.Fragment>
    );
  }
}

export default App;