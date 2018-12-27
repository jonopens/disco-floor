import { observable, action } from 'mobx';

export default class AppStore {
  @observable isColorInverted = false;
  @observable isLastFrame = false;
  @observable isPulsingOn = false;
  @observable isPlaying = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
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
}