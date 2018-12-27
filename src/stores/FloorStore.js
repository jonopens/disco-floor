import { observable, action } from 'mobx';
import patterns from '../logic/patterns';

export default class FloorStore {
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
    }, 1000 / this.selectedSpeed);
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
}
