import { SectionProps } from "@/components/Section";
import MainContent from "../components/contents/MainContent/index";
import AboutContent from "../components/contents/AboutContent";
import SkillContent from "../components/contents/SkillContent";

interface SectionPropsWithKey extends SectionProps {
  key: number;
  carousel?: boolean;
  contents?: React.ReactNode[];
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
      carousel: true,
      contents: [<AboutContent />, <div>Hello</div>],
    },
    {
      key: 3,
      id: "skills",
      type: "white",
      content: <SkillContent />,
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
