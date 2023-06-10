import { styled } from 'styled-components';

const S = {
    ContentBox: styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        transition: 280ms;
        justify-content: center;
        font-size: ${({ theme }) => theme.font_size.large.title_01};
        color: ${({ theme }) => theme.color.white};

        @media ${({ theme }) => theme.media_query.medium} {
            font-size: ${({ theme }) => theme.font_size.medium.title_01};
        }

        @media ${({ theme }) => theme.media_query.small} {
            font-size: ${({ theme }) => theme.font_size.small.title_01};
        }
    `,
};

export default S;
