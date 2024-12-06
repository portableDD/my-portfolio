/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useContext } from "react";
import AllContext from "../features/AllContext";

const Navbar = () => {
  const { nav } = useContext(AllContext);

  const linkClass = ({ isActive }: any) =>
    isActive ? "px-6" : "hover:text-white text-[#ACAEBB] px-6 py-2";

  return (
    <header className="bg-layoutBg font-semibold py-1.5 rounded-xl flex justify-evenly items-center border-b border-peach shadow-navbar">
      {/* logo */}
      <div className="logo font-oleo text-3xl">
        <h1>DT</h1>
      </div>

      {/* nav */}
      <nav className="hidden md:block">
        {nav.map((item) => (
          <NavLink key={item.name} to={item.path} className={linkClass}>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* hamburger */}
      <div className="text-2xl md:hidden">
        <MdMenu />
      </div>
      
    </header>
  );
};

export default Navbar;
