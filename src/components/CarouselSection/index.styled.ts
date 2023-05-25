import { styled } from 'styled-components';

interface SlideButtonProps {
    button_color?: 'black' | 'white';
}

interface SliderProps {
    current_page: number;
}

const SlideButtonCommonStyle = styled.button<SlideButtonProps>`
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    font-size: ${({ theme }) => theme.font_size.large.title_03};
    top: 50%;
    color: ${({ button_color, theme }) => (button_color === 'black' ? theme.color.white : theme.color.primary_700)};
    transform: translateY(-50%);
    @media ${({ theme }) => theme.media_query.medium} {
        font-size: ${({ theme }) => theme.font_size.medium.title_03};
    }

    @media ${({ theme }) => theme.media_query.small} {
        font-size: ${({ theme }) => theme.font_size.small.title_03};
    }
`;

const S = {
    CarouselBox: styled.div`
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    `,
    Slider: styled.div<SliderProps>`
        transition: 280ms;
        transform: translateX(-${({ current_page }) => current_page}00vw);
        display: flex;
        width: 100%;
        height: 100vh;
    `,
    LeftSlideButton: styled(SlideButtonCommonStyle)``,
    RightSlideButton: styled(SlideButtonCommonStyle)`
        right: 0;
    `,
};

export default S;
