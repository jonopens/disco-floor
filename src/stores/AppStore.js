import { observable, action, computed } from 'mobx';

export default class AppStore {
  @observable isColorInverted = false;
  @observable isLastFrame = false;
  @observable isPulsingOn = false;
  @observable isPlaying = false;
  @observable showBuilder = false;

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

  @action setShowBuilder(bool) {
    this.showBuilder = bool;
  }

  @computed get flipTileLighting() {
    if (this.isPulsingOn) {
      return this.rootStore.FloorStore.currentFrame % 2 === 0 ? true : false;
    }
    return false;
  }
}