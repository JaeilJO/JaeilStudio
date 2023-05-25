import { styled } from "styled-components";

interface SectionBoxProps {
  type: "white" | "black";
}

const S = {
  SectionBox: styled.div<SectionBoxProps>`
    background-color: ${({ theme, type }) =>
      type === "white" ? theme.color.white : theme.color.primary_700};
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
  `,

  Section: styled.section`
    width: 100%;
  `,
};

export default S;
