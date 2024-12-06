import { createContext } from "react";
import { nav } from "./Nav";
import { NavIcon } from "./Nav";

interface AllContextType {
  nav: typeof nav;
  NavIcon: typeof NavIcon;
}

const AllContext = createContext({} as AllContextType);

type AllContextProps = {
  children: React.ReactNode;
};

export const AllContextProvider = ({ children }: AllContextProps) => {
  return (
    <AllContext.Provider value={{ nav, NavIcon }}>
      {children}
    </AllContext.Provider>
  );
};

export default AllContext;
