import { observer } from "mobx-react-lite";
import Link from "next/link";
import { FC } from "react";
import { RootStore } from "../store/RootStore";

interface ILink {
  title: string;
  path: string;
}

const Links: FC<{ links: ILink[] }> = ({ links }) => {
  return (
    <div className="flex items-center gap-4 w-1/4 ">
      {links.map((link, index) => (
        <>
          <Link href={link.path} > {link.title} </Link>
          {index !== links.length - 1 && <span className="text-slate-500">/</span>}
        </>
      ))}
    </div>
  );
};

const NavBar: FC<{ links: ILink[] }> = observer(({ links }) => {
  return (
    <nav className="border-b-2 w-full border-slate-500 py-4 flex items-center gap-8 justify-between">
      <Links links={links} />

      <div className="flex gap-4 w-1/4 justify-end">
        <button onClick={() => RootStore.auth.logout()}> Logout </button>
      </div>
    </nav>
  );
});

export const ClearTinyLayout: FC<any> = ({ children, links }) => {
  return (
    <div className="px-4 h-screen  border-pink-300">
      <div className=" h-[10%]  border-grey-300">
        <NavBar
          links={[
            {
              title: "Home",
              path: "/",
            },
            ...links,
          ]}
        />
      </div>
      <div className="h-[90%] w-[100%]  border-blue-300">{children}</div>
    </div>
  );
};
