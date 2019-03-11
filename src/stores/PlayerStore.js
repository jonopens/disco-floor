import { observable, action, computed } from 'mobx';
import patterns from '../data/patterns';

export default class PlayerStore {
  @observable selectedPattern = 'default';
  @observable selectedSpeed = 1.0;
  @observable currentFrame = 0;
  @observable frameInterval = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  returnInterval() {
    const numberOfFrames = Object.keys(patterns[this.selectedPattern]).length
    return setInterval(() => {
      if (this.currentFrame >= (numberOfFrames - 1)) {
        this.setCurrentFrame(0);
      } else {
        this.setCurrentFrame(this.currentFrame + 1);
      }
    }, this.frameLength);
  }

  @action setSelectedPattern(pattern) {
    this.selectedPattern = pattern;
  }

  @action setSelectedSpeed(speed) {
    this.selectedSpeed = speed;
  }

  @action setCurrentFrame(frameNumber) {
    this.currentFrame = frameNumber;
  }

  @action resetFrameInterval() {
    if (!!this.frameInterval) {
      clearInterval(this.frameInterval);
    }
    this.frameInterval = this.returnInterval();
  }

  @computed get frameLength() {
    return 1000 / this.selectedSpeed;
  }

  invertColor = (tileNum, isLit) => {
    switch (tileNum) {
      case 1:
        return 2;
      case 2:
        return 1;
      case 3:
        return 8;
      case 4:
        return 7;
      case 5:
        return 9;
      case 6:
        return 10;
      case 7:
        return 4;
      case 8:
        return 3;
      case 9:
        return 5;
      case 10:
        return 6;
      case 11:
        return 12;
      case 12:
        return 11;
      case 13:
        return 18;
      case 14:
        return 17;
      case 15:
        return 19;
      case 16:
        return 20;
      case 17:
        return 14;
      case 18:
        return 13;
      case 19:
        return 15;
      case 20:
        return 16;
      default:
        return null;
    }
  }

  pulseTile = (tileNum, isLit) => {
    if (isLit) {
      return tileNum - 10;
    }
    return tileNum + 10;
  }

  pulseAndInvert = (tileNum, isLit) => {
    return this.invertColor(
      this.pulseTile(tileNum, isLit)
    );
  }
}
