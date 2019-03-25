import { observable, action, computed } from 'mobx';

export default class BuilderStore {

  @observable builderStep = 1; // values from 1 to 3 ONLY
  @observable patternName = '';
  @observable floorSize = 9; // default;
  @observable currentFrame = 0;
  @observable workingPattern = [];
  @observable frameData = [];
  @observable shouldResetBuilderTiles = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setShouldResetBuilderTiles(bool) {
    this.shouldResetBuilderTiles = bool;
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
    this.frameData = this.makeBlankFrame(value);
  }

  @action setTileInFrame(address, templateNumber) {
    this.frameData[address[0]][address[1]] = templateNumber;
  }

  @action clearFrameData() {
    this.frameData = this.makeBlankFrame(this.floorSize);
  }

  @action goToNextFrame() {
    this.currentFrame += 1;
    if (this.hasNextFrame) {
      this.frameData = this.workingPattern[this.currentFrame];
    }
  }

  @action goToPreviousFrame() {
    this.currentFrame -= 1;
    if (this.hasPrevFrame) {
      this.frameData = this.workingPattern[this.currentFrame];
    }
  }

  @action addFrameToPattern() {
    // add a frame at key of current currentFrame in workingPattern
    // increment currentFrame number
    // set frame data back to all blanks
    this.workingPattern[this.currentFrame] = this.frameData;
    this.currentFrame += 1;
    this.clearFrameData();
  }

  @action removeFrameFromPattern() {
    this.workingPattern = this.workingPattern.splice(this.currentFrame, 1);
    if (this.currentFrame === this.totalWorkingFrames) {
      this.currentFrame -= 1;
    }
    this.clearFrameData();
  }

  @action resetWorkingPattern() {
    // do we want to store this locally to later retrieve it?
    // callback(this.workingPattern) <<=======
    this.workingPattern = {};
    this.currentFrame = 0;
    this.clearFrameData();
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
    return this.workingPattern[this.currentFrame + 1]
  }
  
  @computed
  get previousFrame() {
    return this.workingPattern[this.currentFrame - 1]
  }
  
  @computed
  get hasNextFrame() {
    return this.totalWorkingFrames > 0 && this.currentFrame < this.totalWorkingFrames;
  }

  @computed
  get hasPrevFrame() {
    return this.totalWorkingFrames > 0 && this.currentFrame > 0;
  }

  getTemplateIndex = (address) => {
    return this.frameData[address[0]][address[1]];
  }

  makeBlankFrame(size) {
    const matrix = [];

    for (var i = 0; i < size; i++) {
      matrix[i] = [];
      for (var j = 0; j < size; j++) {
        matrix[i][j] = 1;
      }
    }

    return matrix;
  }
}
