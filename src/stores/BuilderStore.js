import { observable, action, computed } from 'mobx';

export default class BuilderStore {

  blankFrame = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]

  @observable builderStep = 1; // values from 1 to 3 ONLY
  @observable patternName = '';
  @observable floorSize = 9; // default;
  @observable workingFrame = 0;
  @observable workingPattern = {};
  @observable frameData = this.blankFrame;

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

  @action setFloorSize(value) {
    this.floorSize = value;
    this.frameData = [];

    for (var i = 0; i < value; i++) {
      this.frameData[i] = [];
      for (var j = 0; j < value; j++) {
        this.frameData[i][j] = 1;
      }
    }
  }

  @action setTileInFrame(address, templateNumber) {
    this.frameData[address[0]][address[1]] = templateNumber;
  }

  @action clearFrameData() {
    this.frameData = this.blankFrame;
  }

  @action nextWorkingFrame() {
    this.workingFrame += 1;
    if (this.hasNextFrame) {
      this.frameData = this.workingPattern[this.workingFrame];
    }
  }

  @action previousWorkingFrame() {
    this.workingFrame -= 1;
    if (this.hasPrevFrame) {
      this.frameData = this.workingPattern[this.workingFrame];
    }
  }

  @action addWorkingFrame() {
    // add a frame at key of current workingFrame in workingPattern
    // increment workingFrame number
    // set frame data back to all blanks
    this.workingPattern[this.workingFrame] = this.frameData;
    this.workingFrame += 1;
    this.clearFrameData();
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

  @computed
  get totalWorkingFrames() {
    return Object.keys(this.workingPattern).length;
  }

  @computed
  get hasFrames() {
    return this.totalWorkingFrames > 0;
  }

  @computed
  get nextFrame() {
    return this.workingPattern[this.workingFrame + 1]
  }
  
  @computed
  get previousFrame() {
    return this.workingPattern[this.workingFrame - 1]
  }
  
  @computed
  get hasNextFrame() {
    return this.totalWorkingFrames > 0 && this.workingFrame < this.totalWorkingFrames;
  }

  @computed
  get hasPrevFrame() {
    return this.totalWorkingFrames > 0 && this.workingFrame > 0;
  }
}
