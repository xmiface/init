import { makeAutoObservable } from "mobx";
import { AuthStore } from "./AuthStore";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  dev: boolean = true;
  auth = new AuthStore(this);
}

export const RootStore = new Store();
