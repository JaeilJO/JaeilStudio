import S from "./index.styled";

interface SectionProps {
  type: "black" | "white";
}

function Section({}: SectionProps) {
  return <S.Section></S.Section>;
}

export default Section;
