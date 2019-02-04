import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import { inject, observer } from 'mobx-react';

@inject('AppStore', 'PlayerStore')
@observer
class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Header headerText="DISCO FLOOR PLAYER & BUILDER" />
        <Container />
      </React.Fragment>
    );
  }
}

export default App;