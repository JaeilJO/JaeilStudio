import { SectionProps } from "@/components/Section";

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
      id: "about",
      type: "white",
      content: <></>,
      option: { left: false, right: false },
    },
    {
      key: 2,
      id: "skills",
      type: "black",
      content: <></>,
      option: { left: false, right: false },
    },
    {
      key: 3,
      id: "works",
      type: "white",
      content: <></>,
      option: { left: false, right: false },
    },
    {
      key: 4,
      id: "contact",
      type: "black",
      content: <></>,
      option: { left: false, right: false },
    },
  ],
};
export default MainConfig;
