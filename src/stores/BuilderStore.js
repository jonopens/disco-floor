import { observable, action, computed } from 'mobx';

export default class BuilderStore {
  @observable builderStep = 1; // values from 1 to 3 ONLY
  @observable workingFrame = 0;
  @observable patternName = '';
  @observable floorDimensions = [9, 9] // default;
  @observable workingPattern = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setBuilderStep(step) {
    if (step >= 1 && step <= 3) {
      this.builderStep = step;
    }
  }

  @action addWorkingFrame(frame) {
    // add a frame at key of current workingFrame in workingPattern
    // increment workingFrame number
  }

  @action removeWorkingFrame(frame) {
    // remove a frame at key of current workingFrame in workingPattern
    // decrement workingFrame number
  }

  @action resetWorkingPattern(callback) {
    // do we want to store this locally to later retrieve it?
    // callback(this.workingPattern) <<=======
    this.workingPattern = {};
  }
}
