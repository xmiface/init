import { observer } from "mobx-react-lite";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Loader } from "../components/Loader";
import { RootStore } from "../store/RootStore";
import "../styles/globals.css";
import LoginPage from "./login";

export const AuthProvider: React.FC<{ children: any }> = observer(({ children }) => {
  const localAuth = () => {
    RootStore.auth.tryAuthByToken();
  };

  const iFrameAuth = () => {
    if (window.addEventListener) {
      window.addEventListener("message", listener);
    } else {
      // IE8
      window.attachEvent("onmessage", listener);
    }
  };

  function listener(event: MessageEvent) {
    if (event.origin != "http://localhost:3000") {
      // ignore unknown domain
      return;
    }
    RootStore.auth.setIframeAuth(event.data);
  }

  useEffect(() => {
    RootStore.dev ? localAuth() : iFrameAuth();
    // RootStore.auth.logout()
  }, []);

  return (
    <div className="w-100 min-h-screen bg-slate-900 font-medium text-slate-200">
      {RootStore.auth.loading && <Loader />}
      {!RootStore.auth.loading && RootStore.auth.isAuth && <>{children}</>}
      {!RootStore.auth.loading && !RootStore.auth.isAuth && <LoginPage />}
    </div>
  );
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
