import React from "react";
import Image from "next/image";
import Link from "next/link";
import SideDrawer from "./SideDrawer";

const Header = () => {
  return (
    <header className="flex items-center px-4 bg-[#ffffff]">
      <Image src="/logo.png" alt="Logo" width={135} height={45} />
      <div className="flex flex-1">
        <nav className="hidden flex-1 lg:flex">
          {HeaderItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="font-semibold text-sm text-[#2A2A2A] px-4 py-2"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex gap-6 items-center text-[#1e2329] text-sm font-semibold">
        <Link href="#" className="hidden lg:block">
          Login
        </Link>
        <Link href="#" className="bg-[#59e1ff] py-2 px-6 rounded-full">
          Register
        </Link>
        <div className="block lg:hidden">
          <SideDrawer />
        </div>
      </div>
    </header>
  );
};

export default Header;

const HeaderItems = [
  "Markets",
  "Fees",
  "Trade",
  "List",
  "Your",
  "Crypto",
  "Earnings",
];
