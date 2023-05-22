import { FontSizeType, FontWeightType } from '@/styles/theme';
import { styled } from 'styled-components';

interface IconBoxProps {
    font_size: keyof FontSizeType;
    font_weight: keyof FontWeightType;
}
interface TextProps {
    $hover: boolean;
}

interface IconProps {
    $hover: boolean;
}

const S = {
    IconBox: styled.div<IconBoxProps>`
        position: relative;
        display: flex;
        flex-direction: column;
        width: fit-content;
        justify-content: center;
        align-items: center;
        height: fit-content;
        transition: 280ms;
        overflow: hidden;
        cursor: pointer;
        font-size: ${({ font_size, theme }) => theme.font_size.large[font_size]};
        font-weight: ${({ font_weight, theme }) => theme.font_weight[font_weight]};
        &:hover {
            color: ${({ theme }) => theme.color.primary_500};
        }

        &:active {
            color: ${({ theme }) => theme.color.primary_600};
        }
        @media ${({ theme }) => theme.media_query.medium} {
            font-size: ${({ theme, font_size }) => theme.font_size.medium[font_size]};
        }

        @media ${({ theme }) => theme.media_query.small} {
            font-size: ${({ theme, font_size }) => theme.font_size.small[font_size]};
        }
    `,
    Text: styled.div<TextProps>`
        transition: 280ms;
        pointer-events: none;
        position: relative;
        top: ${({ $hover }) => ($hover ? `0` : `-0.3em`)};
        opacity: ${({ $hover }) => ($hover ? `100%` : `0%`)};
    `,
    Icon: styled.div<IconProps>`
        position: relative;
        transition: 280ms;
        top: ${({ $hover }) => ($hover ? `-0.1em` : `0`)};
    `,
};

export default S;
