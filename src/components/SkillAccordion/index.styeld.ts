import styled from "styled-components";

const S = {
  Container: styled.div`
    justify-content: center;
    height: fit-content;
    display: flex;
    gap: 0.4167em;
    font-size: ${({ theme }) => theme.font_size.large.title_03};
    max-width: 100vw;
    overflow: scroll;
    transition: 280ms;
    width: 80%;

    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.title_03};
    }

    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.title_03};
    }
  `,
};

export default S;
