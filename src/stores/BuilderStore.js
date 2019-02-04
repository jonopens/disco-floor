import { observable, action, computed } from 'mobx';

export default class BuilderStore {
  @observable builderStep = 1; // values from 1 to 3 ONLY
  @observable patternName = '';
  @observable floorDimensions = [9, 9]; // default;
  @observable workingFrame = 0;
  @observable workingPattern = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setBuilderStep(step) {
    if (step >= 1 && step <= 3) {
      this.builderStep = step;
    }
  }

  @action setPatternName(name) {
    this.patternName = name;
  }

  @action setFloorDimensions(array) {
    if (array.length === 2) {
      this.floorDimensions = array;
    }
  }

  @action addWorkingFrame() {
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
