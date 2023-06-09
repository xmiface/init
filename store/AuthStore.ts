import axios from "axios";
import { makeAutoObservable } from "mobx";
type TCurrent = HTMLInputElement | null;

export class AuthStore {
  RootStore: any;
  constructor(root: any) {
    makeAutoObservable(this), (this.RootStore = root);
  }

  isAuth = false;
  loading = true;

  setIframeAuth({ sessionToken, refreshToken }: { sessionToken: string; refreshToken: string }) {
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("sessionToken", sessionToken);
    this.loading = false;
    this.isAuth = true;
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  setAuth(value: boolean) {
    this.isAuth = value;
  }

  tryAuthByToken() {
    const sessionToken = localStorage.getItem("sessionToken");
    const PORT = this.RootStore.dev ? `3000` : `3001`;

    if (sessionToken) {
      axios.post(`http://localhost:${PORT}/api/loginBySessionToken`, { sessionToken: sessionToken }).then((res) => {
        if (res.data.status !== 200) {
          this.loading = false;
          this.isAuth = false;
        } else {
          this.loading = false;
          this.isAuth = true;
        }
      });
    } else {
      this.loading = false;
      this.isAuth = false;
    }
  }

  submitLogin(login: string | undefined, password: string | undefined) {
    if (!login || !password) return;
    const PORT = this.RootStore.dev ? `3000` : `3001`;

    axios
      .post(`http://localhost:${PORT}/api/login`, {
        login: login,
        password: password,
      })
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("refreshToken", res.data.refreshToken);
          localStorage.setItem("sessionToken", res.data.sessionToken);
          this.loading = false;
          this.isAuth = true;
          return;
        }
        this.loading = false;
        this.isAuth = false;
      })
      .catch((err) => console.log(err));
  }

  logout() {
    this.loading = false;
    this.isAuth = false;
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("sessionToken");
  }
}
