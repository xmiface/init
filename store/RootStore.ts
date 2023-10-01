import { makeAutoObservable } from "mobx";
import { AuthStore } from "./AuthStore";
import { UserStore } from "./UserStore";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  
  dev: boolean = true;
  auth = new AuthStore(this);
  user = new UserStore(this);
}

export const RootStore = new Store();
