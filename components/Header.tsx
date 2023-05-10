/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import EmailDetails from "./Email";
import MobileDetails from "./Mobile";
import Search from "./Search";

const Header = () => {
  return (
    <header
      className="flex justify-between flex-col space-y-5 lg:flex-row lg:items-center px-5 py-5"
      id="header"
    >
      <Link href="/" passHref>
        <img className="brand-logo-image" src="/logo.png" alt="Bio Diversity" />
      </Link>
      <Search />
      <div className="flex flex-col lg:items-end space-y-1">
        <MobileDetails />
        <EmailDetails />
      </div>
    </header>
  );
};

export default Header;
