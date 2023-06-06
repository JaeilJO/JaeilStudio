import { styled } from 'styled-components';

const S = {
    Container: styled.div`
        display: flex;
        gap: 0.5em;
        flex-direction: column;

        font-size: ${({ theme }) => theme.font_size.large.sub_title_01};
        @media ${({ theme }) => theme.media_query.small} {
        }
    `,
};
export default S;
