import { keyframes, styled } from "styled-components";

const FlipBoxButtonCommonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font_size.large.sub_title_03};

  background: none;
  border: 1px solid ${({ theme }) => theme.color.gray_500};

  cursor: pointer;
`;

const flipDown = keyframes`
100%{
    
    transform: rotateX(90deg) translateX(-50%);
}
`;
const FlipUp = keyframes`
100%{
    transform: rotateX(0deg) translateX(-50%);
}
`;

interface FlipCardProps {
  $is_fliped: boolean;
}

const FlipCardCommonStyle = styled.div<FlipCardProps>`
  position: absolute;
  width: 200px;
  height: 50%;
  left: 50%;
  overflow: hidden;
  transform: translateX(-50%);
  border: 1px solid red;
  background-color: inherit;
`;

const S = {
  FlipBox: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  FlipBoxButtonUp: styled(FlipBoxButtonCommonStyle)``,
  FlipBoxButtonDown: styled(FlipBoxButtonCommonStyle)``,

  FlipContainer: styled.div`
    font-size: ${({ theme }) => theme.font_size.large.sub_title_01};
    background-color: antiquewhite;
    position: relative;
    text-align: center;
  `,
  FlipCardTop: styled(FlipCardCommonStyle)`
    top: 0;
    transform-origin: bottom;
  `,

  FlipCardBottom: styled(FlipCardCommonStyle)`
    bottom: 0;
    line-height: 1%;
    transform-origin: top;
  `,
};
export default S;
