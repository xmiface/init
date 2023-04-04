import { observer } from "mobx-react-lite";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Loader } from "../components/Loader";
import { RootStore } from "../store/RootStore";
import "../styles/globals.css";
import LoginPage from "./login";

// export async function getServerSideProps() {
//   const res = await axios(`/api/cat-info`);
//   const isAuth = await res.data;
//   return { props: { isAuth } };
// }

const str = JSON.stringify({
  username: "kminchelle",
  password: "0lelplR",
  // expiresInMins: 60, // optional
});

export const AuthProvider: React.FC<{ children: any }> = observer(({ children }) => {
  useEffect(() => {
    RootStore.auth.tryAuthByToken();
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
