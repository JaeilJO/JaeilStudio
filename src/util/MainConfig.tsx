import { SectionProps } from "@/components/Section";
import AboutContent from "../components/contents/MainContent/index";

interface SectionPropsWithKey extends SectionProps {
  key: number;
}

export interface MainConfigItemsType {
  items: SectionPropsWithKey[];
}

const MainConfig: MainConfigItemsType = {
  items: [
    {
      key: 1,
      id: "home",
      type: "white",
      content: <AboutContent />,
      option: { left: false, right: false },
    },
    {
      key: 2,
      id: "about",
      type: "black",
      content: <></>,
      option: { left: false, right: false },
    },
    {
      key: 3,
      id: "skills",
      type: "white",
      content: <></>,
      option: { left: false, right: false },
    },
    {
      key: 4,
      id: "works",
      type: "black",
      content: <></>,
      option: { left: false, right: false },
    },
    {
      key: 5,
      id: "contact",
      type: "white",
      content: <></>,
      option: { left: false, right: false },
    },
  ],
};
export default MainConfig;
