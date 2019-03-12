import { observable, action, computed } from 'mobx';

export default class AppStore {
  @observable isColorInverted = false;
  @observable isLastFrame = false;
  @observable isPulsingOn = false;
  @observable isPlaying = false;
  @observable containerName = 'Player';

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

  @action setContainerName(text) {
    this.containerName = text;
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

  isSelectedSwitch(name) {
    return computed(() => this.containerName === name).get();
  }
}