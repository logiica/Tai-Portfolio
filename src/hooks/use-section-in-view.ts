import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSection } from "./active-section-provider";
import type { SectionName } from "./active-section-provider";

export const useSectionInView = (sectionName: SectionName) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick! > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection]);

  return ref;
};
