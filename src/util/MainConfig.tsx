import { SectionProps } from "@/components/Section";
import MainContent from "../components/contents/MainContent/index";
import AboutContent from "../components/contents/AboutContent";

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
      content: <MainContent />,
    },
    {
      key: 2,
      id: "about",
      type: "black",
      content: <AboutContent />,
    },
    {
      key: 3,
      id: "skills",
      type: "white",
      content: <></>,
    },
    {
      key: 4,
      id: "works",
      type: "black",
      content: <></>,
    },
    {
      key: 5,
      id: "contact",
      type: "white",
      content: <></>,
    },
  ],
};
export default MainConfig;
