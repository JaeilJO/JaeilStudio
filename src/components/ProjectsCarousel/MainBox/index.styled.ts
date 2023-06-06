import { styled } from "styled-components";

const S = {
  Container: styled.div`
    height: 500px;
    display: flex;
    background-color: darkblue;
    justify-content: space-between;
    @media ${({ theme }) => theme.media_query.small} {
      height: 300px;
    }
  `,
  ArrowBox: styled.button`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    color: ${({ theme }) => theme.color.white};
    background: none;
    border: none;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font_size.large.sub_title_01};
    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.sub_title_01};
    }
    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.sub_title_01};
    }
  `,

  ShowBox: styled.div`
    width: 300px;
    position: relative;
    background-color: azure;
    overflow: hidden;
  `,

  ItemList: styled.div`
    height: 100%;
    display: flex;
    position: absolute;
    background-color: aqua;
  `,

  Item: styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    background-color: brown;
    color: ${({ theme }) => theme.color.white};
  `,
  ItemImage: styled.div``,
  ItemTitle: styled.div``,
};

export default S;
