import { styled } from "styled-components";

const S = {
  Container: styled.div`
    background-color: antiquewhite;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: antiquewhite;
  `,
  PaginationItemList: styled.div`
    display: flex;
    gap: 0.5em;
    width: fit-content;
    justify-content: center;
  `,
  PaginationItem: styled.div`
    width: 0.5em;
    height: 0.5em;
    background-color: ${({ theme }) => theme.color.primary_500};
    transition: 280ms;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.color.white};
    }
  `,
};

export default S;
