import { styled } from "styled-components";

interface SelectorButtonProps {
  disabled: boolean;
}

interface SelectorItemULProps {
  current_item: number;
}

const S = {
  SelectorBox: styled.div`
    display: flex;
    flex-direction: column;

    position: relative;
    align-items: center;
  `,
  SelectorButton: styled.button<SelectorButtonProps>`
    font-size: ${({ theme }) => theme.font_size.large.body_02};
    padding: 0.2em 0.5em;
    background: none;
    border: none;
    cursor: pointer;
    width: fit-content;
    padding: none;
    color: ${({ disabled, theme }) =>
      disabled ? theme.color.gray_600 : theme.color.primary_700};
    pointer-events: ${({ disabled }) => (disabled ? `none` : ``)};
    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.body_02};
    }

    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.body_02};
    }
  `,
  Selector: styled.div`
    height: 100px;
    overflow: hidden;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      height: 20%;
      width: 100%;
      backdrop-filter: blur(10px);
    }
  `,
  SelectorItemUL: styled.ul<SelectorItemULProps>`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    transition: 280ms;
    transform: ${({ current_item }) => `translateY(-${current_item}00px)`};
  `,
  SelectorItemLi: styled.li`
    height: 100px;
    text-align: center;
    line-height: 100px;

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
