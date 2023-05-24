import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Icon from "../atoms/Icon";
import S from "./index.styled";

export interface SectionProps {
  id: string;
  content: React.ReactNode;
  type?: "black" | "white";
  option: {
    left: boolean;
    right: boolean;
  };
}

function Section({ content, type = "white", option, id }: SectionProps) {
  return (
    <S.SectionBox type={type} id={id}>
      <S.SectionArrowBox>
        {option.left === true ? (
          <Icon
            type={type}
            icon={<BsChevronLeft />}
            font_size={"title_03"}
            font_weight={"light"}
          />
        ) : (
          <></>
        )}
      </S.SectionArrowBox>

      {/* content */}
      <S.Section>{content}</S.Section>

      <S.SectionArrowBox>
        {option.right === true ? (
          <Icon
            type={type}
            icon={<BsChevronRight />}
            font_size={"title_03"}
            font_weight={"light"}
          />
        ) : (
          <></>
        )}
      </S.SectionArrowBox>
    </S.SectionBox>
  );
}

export default Section;
