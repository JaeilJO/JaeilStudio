import S from "./index.styled";

export interface SectionProps {
  id: string;
  content: React.ReactNode;
  type?: "black" | "white";
}

function Section({ content, type = "white", id }: SectionProps) {
  return (
    <S.SectionBox type={type} id={id}>
      {/* content */}
      <S.Section>{content}</S.Section>
    </S.SectionBox>
  );
}

export default Section;
