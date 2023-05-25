import { styled } from "styled-components";

interface SlideButtonProps {
  direction: "left" | "right";
  button_color: "black" | "white";
}

const S = {
  CarouselBox: styled.div`
    position: relative;
    border: 1px solid black;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  `,
  SlideButton: styled.button<SlideButtonProps>`
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    color: ${({ button_color, theme }) =>
      button_color === "black" ? theme.color.primary_700 : theme.color.white};
    font-size: ${({ theme }) => theme.font_size.large.title_03};
    top: 50%;
    transform: translateY(-50%);
    right: ${({ direction }) => (direction === "right" ? 0 : ``)};
    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.title_03};
    }

    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.title_03};
    }
  `,
  Slider: styled.div`
    transition: 280ms;
    transform: translateX(vw);
    display: flex;
    width: 100%;
    height: 100vh;
  `,
};

export default S;
