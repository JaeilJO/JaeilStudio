import { styled } from "styled-components";

const S = {
  ContentBox: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
  `,
  Title: styled.div`
    display: flex;
    width: 100%;

    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.font_size.large.title_01};
    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.title_01};
    }

    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.title_01};
    }
  `,
  Main: styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  `,
};

export default S;
