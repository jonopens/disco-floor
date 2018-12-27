import FloorStore from './FloorStore';
import AppStore from './AppStore';

export default class RootStore {
  constructor() {
    this.FloorStore = new FloorStore(this);
    this.AppStore = new AppStore(this);
  }
}