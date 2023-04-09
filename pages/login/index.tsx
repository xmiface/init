import clsx from "clsx";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { RootStore } from "../../store/RootStore";

export default function LoginPage() {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordView = () => setShowPassword(!showPassword);

  const submitLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    RootStore.auth.submitLogin(loginRef?.current?.value, passwordRef.current?.value);
  };

  useEffect(() => passwordRef?.current?.focus(), [showPassword]);

  useEffect(() => {
    loginRef.current && (loginRef.current.value = "admin");
    passwordRef.current && (passwordRef.current.value = "zxc!%)0");
  }, []);

  const inputPasswordType = useMemo(() => (showPassword ? "text" : "password"), [showPassword]);
  const inputPasswordIcon = useMemo(() => (showPassword ? "😯" : "😪"), [showPassword]);
  const inputPasswordPlaceholder = useMemo(() => (showPassword ? "" : "password"), [showPassword]);
  const textStyle = "text-slate-500 hover:text-slate-100";
  const outlineStyle = "outline-none hover:outline-none hover:outline-4 active:outline-none";
  const borderStyle = "border-2 border-slate-500 hover:border-slate-300 active:border-slate-100";
  const customStyle = `duration-200 bg-slate-200 rounded-md`;
  const SAbsoluteCenter = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";

  return (
    <div className="flex justify-center items-center border-pink-100">
      <form method="POST" className={clsx("w-[300px] flex flex-col space-y-2", SAbsoluteCenter)} onSubmit={submitLogin}>
        <input
          type="text"
          placeholder="login"
          ref={loginRef}
          className={clsx(customStyle, textStyle, outlineStyle, borderStyle, "p-2")}
        />
        <div className="flex relative">
          <input
            type={inputPasswordType}
            placeholder={inputPasswordPlaceholder}
            ref={passwordRef}
            className={clsx(customStyle, textStyle, outlineStyle, borderStyle, " w-full p-2 border-slate-500")}
          />
          <button
            type="button"
            onClick={togglePasswordView}
            className={"absolute right-0 top-0 h-[100%] w-[50px] flex items-center justify-center"}
          >
            {inputPasswordIcon}
          </button>
        </div>
        <button type="submit" className={clsx(customStyle, textStyle, borderStyle, "p-2 w-1/2")}>
          login
        </button>
      </form>
    </div>
  );
}
