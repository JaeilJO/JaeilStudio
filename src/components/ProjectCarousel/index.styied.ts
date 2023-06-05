import { styled } from 'styled-components';

const S = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        font-size: ${({ theme }) => theme.font_size.large.sub_title_01};

        @media ${({ theme }) => theme.media_query.medium} {
            font-size: ${({ theme }) => theme.font_size.medium.sub_title_01};
        }

        @media ${({ theme }) => theme.media_query.small} {
            font-size: ${({ theme }) => theme.font_size.small.sub_title_01};
        }
    `,
};
export default S;
