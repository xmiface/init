import { observer } from "mobx-react-lite";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Loader } from "../components/Loader";
import { RootStore } from "../store/RootStore";
import "../styles/globals.css";
import LoginPage from "./login";
import Header from "../components/Header";

export const AuthProvider: React.FC<{ children: any }> = observer(({ children }) => {
  useEffect(() => {
    RootStore.auth.tryAuthByToken();
  }, []);

  return (
    <div className="w-full bg-zinc-900 h-screen  border-blue-500  overflow-hidden">
      <div className="max-w-[932px] border-2 mx-auto font-medium text-slate-200 h-full  border-pink-500">

        {RootStore.auth.loading && <Loader />}

        {!RootStore.auth.loading && RootStore.auth.isAuth &&
          <div className="relative flex flex-col h-full">
            <Header />
            <div className="border-red-500 h-full">{children}</div>
          </div>
        }

        {!RootStore.auth.loading && !RootStore.auth.isAuth && <LoginPage />}
      </div>
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
