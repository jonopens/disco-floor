import { observable, action, computed } from 'mobx';
import patterns from '../data/patterns';

export default class PlayerStore {
  @observable selectedPattern = 'default';
  @observable selectedSpeed = 1.0;
  @observable currentFrame = 0;
  @observable frameInterval = null;
  @observable pulseCount = 0;
  @observable isColorInverted = false;
  @observable isLastFrame = false;
  @observable isPulsingOn = false;
  @observable isPlaying = false;
  @observable containerName = 'Player';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  
  @action setSelectedPattern(pattern) {
    this.selectedPattern = pattern;
    this.pulseCount = 0;
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
  
  @action increasePulseCount() {
    this.pulseCount = this.pulseCount + 1;
  }
  

  @action setIsColorInverted(bool) {
    this.isColorInverted = bool;
  }

  @action setIsLastFrame(bool) {
    this.isLastFrame = bool;
  }

  @action setIsPulsingOn(bool) {
    this.isPulsingOn = bool;
  }

  @action setIsPlaying(bool) {
    this.isPlaying = bool;
  }

  @action setContainerName(text) {
    this.containerName = text;
  }

  // COMPUTED

  @computed
  get framesInPattern() {
    return Object.keys(patterns[this.selectedPattern]).length
  }

  @computed
  get frameLength() {
    return 1000 / this.selectedSpeed;
  }

  @computed
  get shouldFlipTileLighting() {
    if (this.isPulsingOn) {
      return this.pulseCount % 2 === 0 ? true : false;
    }
    return false;
  }

  @computed get playerIcon() {
    if (this.isPlaying) {
      return String.fromCharCode(9632);
    }
    return String.fromCharCode(9654);
  }

  @computed get playerClassName() {
    if (this.isPlaying) {
      return 'button__play-button button__play-button--stopped';
    }
    return 'button__play-button button__play-button--playing';
  }

  // HELPERS

  isSelectedSwitch(name) {
    return computed(() => this.containerName === name).get();
  }
  
  returnInterval() {
    return setInterval(() => {
      this.increasePulseCount();
      if (this.currentFrame >= (this.framesInPattern - 1)) {
        this.setCurrentFrame(0);
      } else {
        this.setCurrentFrame(this.currentFrame + 1);
      }
    }, this.frameLength);
  }

  invertColor = (tileNum) => {
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
