import { FontSizeType, FontWeightType } from '@/styles/theme';
import { styled } from 'styled-components';

interface LogoStyleProp {
    font_size: keyof FontSizeType;
    font_weight: keyof FontWeightType;
}

const S = {
    Logo: styled.div<LogoStyleProp>`
        font-size: ${({ theme, font_size }) => theme.font_size.large[font_size]};
        font-weight: ${({ theme, font_weight }) => theme.font_weight[font_weight]};
        transition: 280ms;
        @media ${({ theme }) => theme.media_query.medium} {
            font-size: ${({ theme, font_size }) => theme.font_size.medium[font_size]};
        }

        @media ${({ theme }) => theme.media_query.small} {
            font-size: ${({ theme, font_size }) => theme.font_size.small[font_size]};
        }
    `,
};

export default S;
