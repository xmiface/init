import clsx from "clsx";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoutButton from "./Logout";

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export const Navbar: React.FC<{ links: { path: string; title: string }[] }> = ({ links }) => {
  const r = useRouter();

  const SLink = "font-semibold	 mr-2 ";
  const SLinkDefault = clsx(SLink, "text-slate-400 hover:text-slate-500");
  const SLinkCurrent = clsx(SLink, "text-slate-300 hover:text-slate-100");

  return (
    <nav className="p-4 w-[100%] flex justify-between">
      <div>
        {links.map((link) => (
          <Link key={nanoid()} href={link.path} className={link.path == r.route ? SLinkCurrent : SLinkDefault}>
            {capitalizeFirstLetter(link.title)}
          </Link>
        ))}
      </div>

      <LogoutButton />
    </nav>
  );
};
