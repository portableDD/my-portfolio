/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useContext, useState } from "react";
import AllContext from "../features/AllContext";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { nav } = useContext(AllContext);
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  const linkClass = ({ isActive }: any) =>
    isActive ? "px-6" : "hover:text-white text-[#ACAEBB] px-6 py-2";

  return (
    <header className="bg-layoutBg font-semibold py-1.5 rounded-xl flex justify-evenly items-center border-b border-peach shadow-navbar">
      {/* logo */}
      <div className="logo font-oleo text-3xl">
        <h1>DT</h1>
      </div>

      {/*desktop nav */}
      <nav className="hidden md:block">
        {nav.map((item) => (
          <NavLink key={item.name} to={item.path} className={linkClass}>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* hamburger */}
      <div className="text-2xl md:hidden">
        <MdMenu onClick={() => setMobileNav(!mobileNav)} />
      </div>

      {/* Mobile Nav */}
      {mobileNav && <MobileNav nav={nav} onClose={() => setMobileNav(false)} />}
    </header>
  );
};

export default Navbar;
