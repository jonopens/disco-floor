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
}
