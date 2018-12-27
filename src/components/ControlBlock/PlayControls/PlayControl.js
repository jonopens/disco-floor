import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PlayButton from './PlayButton';

@inject('FloorStore', 'AppStore')
@observer
export default class PlayControl extends Component {
  render() {
    return(
      <div className="control-block__item  control-block__item--play">
        <PlayButton />
      </div>
    )
  }
}