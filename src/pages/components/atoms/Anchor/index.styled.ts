import Link from "next/link";
import { styled } from "styled-components";

const S = {
  Anchor: styled(Link)`
    font-size: ${({ theme }) => theme.font_size.sub_title_01};
    font-weight: ${({ theme }) => theme.font_size.sub_title_01};
    color: ${({ theme }) => theme.color.primary_700};
    position: relative;
    transition: 280ms;

    &::before {
      content: "";
      z-index: -1;
      background-color: ${({ theme }) => theme.color.primary_700};
      width: 0%;
      height: 100%;
      top: 0;
      left: -10%;
      transition: 280ms;
      position: absolute;
    }

    &:hover {
      color: ${({ theme }) => theme.color.white};
      &::before {
        width: 120%;
      }
    }
    &:active::before {
      background-color: ${({ theme }) => theme.color.primary_600};
    }
    &:focus {
      color: ${({ theme }) => theme.color.primary_700};
      &::before {
        border: ${({ theme }) => theme.color.gray_600};
        background-color: ${({ theme }) => theme.color.white};
      }
    }
  `,
  DisabledAnchor: styled(Link)`
    pointer-events: none;
    color: ${({ theme }) => theme.color.gray_600};
    font-size: ${({ theme }) => theme.font_size.sub_title_01};
    font-weight: ${({ theme }) => theme.font_size.sub_title_01};
  `,
};

export default S;
