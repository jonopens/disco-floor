import { observable, action, computed } from 'mobx';

export default class BuilderStore {

  @observable patternName = '';
  @observable isFirstBuilderView = true;
  @observable builderStep = 1; // values from 1 to 3 ONLY
  @observable floorSize = 9; // default;
  @observable currentFrame = 0;
  @observable workingPattern = []; // moving to array for ease of splice

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action addFrame() {
    this.workingPattern.push(
      this.makeBlankFrame(this.floorSize),
    )
  }

  @action addFirstFrame(size = 9) {
    this.workingPattern[0] = this.makeBlankFrame(size);
  }
  
  @action setPatternName(name) {
    this.patternName = name;
  }

  @action setFirstBuilderView() {
    this.isFirstBuilderView = false;
  }

  @action setBuilderStep(step) {
    if (step >= 1 && step <= 3) {
      this.builderStep = step;
    }
  }

  @action setFloorSize(value) {
    this.floorSize = value;
  }

  @action setTileInFrame(address, templateNumber) {
    this.workingPattern[this.currentFrame][address[0]][address[1]] = templateNumber;
  }

  @action goToNextFrame() {
    this.currentFrame += 1;
  }

  @action goToPreviousFrame() {
    this.currentFrame -= 1;
  }

  @action addFrameToPattern() {
    // add a frame at key of current currentFrame in workingPattern
    // increment currentFrame number
    // set frame data back to all blanks
    this.addFrame();
    this.currentFrame += 1;
  }

  @action removeFrameFromPattern() {
    this.workingPattern = this.workingPattern.splice(this.currentFrame, 1);
    if (this.currentFrame + 1 === this.totalWorkingFrames) {
      this.currentFrame -= 1;
    }
  }

  @action resetWorkingPattern() {
    // do we want to store this locally to later retrieve it?
    // callback(this.workingPattern) <<=======
    this.workingPattern = [];
    this.addFrame(); // push in first frame
    this.currentFrame = 0;
  }

  @computed
  get top() {
    return this.workingPattern[this.currentFrame];
  }

  @computed
  get shouldShowTopControls() {
    return this.builderStep === 2 && !this.rootStore.PlayerStore.showingPlayer;
  }

  @computed
  get totalWorkingFrames() {
    return this.workingPattern.length;
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
    return this.totalWorkingFrames > 1 && this.currentFrame + 1 < this.totalWorkingFrames;
  }

  @computed
  get hasPrevFrame() {
    return this.totalWorkingFrames > 1 && this.currentFrame > 0;
  }

  tileIndexAtAddress(address) {
    if (!!this.workingPattern[this.currentFrame]) {
      return this.top[address[0]][address[1]];
    }
    return 1;
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
