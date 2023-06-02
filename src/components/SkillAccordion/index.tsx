import SkillAccordionItem from "./SkillAccordionItem";
import S from "./index.styeld";
import { TbBrandNextjs, TbBrandJavascript, TbBrandRedux } from "react-icons/tb";
import { DiReact } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";
import { useState } from "react";

const SkillItems = [
  { key: 1, title: "Next.js", icon: <TbBrandNextjs /> },
  { key: 2, title: "JavaScript", icon: <TbBrandJavascript /> },
  { key: 3, title: "React", icon: <DiReact /> },
  { key: 4, title: "Styled-Components", icon: <SiStyledcomponents /> },
  { key: 5, title: "Redux", icon: <TbBrandRedux /> },
];
function SkillAccordion() {
  const [currentItem, setCurrentItem] = useState("Next.js");

  return (
    <S.Container>
      {SkillItems.map((item) => (
        <SkillAccordionItem
          key={item.key}
          title={item.title}
          $isSelect={currentItem === item.title}
          icon={item.icon}
          setCurrentItem={setCurrentItem}
        />
      ))}
    </S.Container>
  );
}

export default SkillAccordion;
