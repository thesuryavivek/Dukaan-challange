import Link from "next/link";
import { type FC } from "react";

interface NavLinkProps {
  children: React.ReactNode;
  linkText: string;
}

const NavLink: FC<NavLinkProps> = ({ children, linkText }) => {
  return (
    <li
      className={`px-4 py-2 rounded font-medium text-sm hover:bg-white/5 cursor-pointer ${
        linkText.toLocaleLowerCase() === "payments" ? "bg-white/10" : ""
      }`}
    >
      <Link
        href={`#${linkText.toLocaleLowerCase()}`}
        className="flex space-x-3 items-center w-full"
      >
        <span>{children}</span>
        <span>{linkText}</span>
      </Link>
    </li>
  );
};

export default NavLink;
