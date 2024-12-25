import { createContext } from "react";
import { ContactIcons, nav, ProjectDetails, SkillDetails, Stack } from "./Nav";
import { NavIcon } from "./Nav";

interface AllContextType {
  nav: typeof nav;
  NavIcon: typeof NavIcon;
  SkillDetails: typeof SkillDetails;
  Stack: typeof Stack;
  ContactIcons: typeof ContactIcons;
  ProjectDetails: typeof ProjectDetails;
}

const AllContext = createContext({} as AllContextType);

type AllContextProps = {
  children: React.ReactNode;
};

export const AllContextProvider = ({ children }: AllContextProps) => {
  return (
    <AllContext.Provider
      value={{
        nav,
        NavIcon,
        SkillDetails,
        Stack,
        ContactIcons,
        ProjectDetails,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export default AllContext;
