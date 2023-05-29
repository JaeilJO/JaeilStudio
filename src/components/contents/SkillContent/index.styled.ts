import { styled } from "styled-components";

const S = {
  ContentBox: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    @media ${({ theme }) => theme.media_query.medium} {
      flex-direction: column;
    }
  `,
  LeftContent: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    @media ${({ theme }) => theme.media_query.medium} {
      justify-content: center;
      align-items: flex-end;
    }
  `,
  RightContent: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${({ theme }) => theme.media_query.medium} {
      justify-content: center;
      align-items: flex-start;
    }
  `,

  Text: styled.div`
    font-size: ${({ theme }) => theme.font_size.large.title_03};
    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.title_03};
    }
    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.title_03};
    }
  `,
};

export default S;
