import styled from 'styled-components';

const S = {
    Container: styled.div`
        justify-content: center;
        height: fit-content;
        display: flex;
        gap: 0.4167em;
        font-size: ${({ theme }) => theme.font_size.large.sub_title_02};
        max-width: 100vw;

        transition: 280ms;
        width: 90vw;
        @media ${({ theme }) => theme.media_query.medium} {
            font-size: ${({ theme }) => theme.font_size.medium.sub_title_02};
        }

        @media ${({ theme }) => theme.media_query.small} {
            font-size: ${({ theme }) => theme.font_size.small.sub_title_02};
        }
    `,
};

export default S;
