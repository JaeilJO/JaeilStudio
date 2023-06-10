import { styled } from "styled-components";

interface ItemBoxProps {
  $isSelect: boolean;
}

const S = {
  ItemBox: styled.div<ItemBoxProps>`
    display: flex;
    flex-direction: column;

    flex-grow: ${({ $isSelect }) => ($isSelect ? 5 : 1)};
    pointer-events: ${({ $isSelect }) => ($isSelect ? "none" : "")};
    transition: 280ms;
    flex-basis: ${({ $isSelect }) => ($isSelect ? "100px" : "")};
  `,
  LogoBox: styled.div`
    border-radius: 0.1em;

    height: 3em;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.color.white};
    align-items: center;
    font-size: ${({ theme }) => theme.font_size.large.title_01};
    background-color: ${({ theme }) => theme.color.primary_600};
    transition: 280ms;
    cursor: pointer;

    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.title_01};
    }

    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.title_01};
    }
    &:hover {
      background-color: ${({ theme }) => theme.color.primary_500};
    }
  `,
  TitleBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 280ms;
    white-space: nowrap;
  `,
};

export default S;
