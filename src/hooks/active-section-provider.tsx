import { createContext, PropsWithChildren, useContext, useState } from "react";
import { navItems } from "../components/layout/Header";

export type SectionName = (typeof navItems)[number]["label"];

type ActiveSectionContextType = {
  activeSection: SectionName | null;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionProvider = ({ children }: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = (): ActiveSectionContextType => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }

  return context;
};
