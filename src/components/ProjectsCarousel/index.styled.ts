import { styled } from "styled-components";

const S = {
  Container: styled.div`
    display: flex;
    gap: 0.25em;
    flex-direction: column;
    background-color: aliceblue;
    font-size: ${({ theme }) => theme.font_size.large.sub_title_01};
  `,
};
export default S;
