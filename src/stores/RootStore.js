import PlayerStore from './PlayerStore';
import BuilderStore from './BuilderStore';

export default class RootStore {
  constructor() {
    this.BuilderStore = new BuilderStore(this);
    this.PlayerStore = new PlayerStore(this);
  }
}