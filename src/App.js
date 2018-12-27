import React from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import { inject, observer } from 'mobx-react';

@inject('AppStore', 'FloorStore')
@observer
class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Header />
        <Container />
      </React.Fragment>
    );
  }
}

export default App;