import PlayerStore from './PlayerStore';
import BuilderStore from './BuilderStore';
import AppStore from './AppStore';

export default class RootStore {
  constructor() {
    this.BuilderStore = new BuilderStore(this);
    this.PlayerStore = new PlayerStore(this);
    this.AppStore = new AppStore(this);
  }
}