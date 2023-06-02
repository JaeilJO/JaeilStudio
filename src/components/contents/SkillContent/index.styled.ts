import { styled } from 'styled-components';

const S = {
    ContentBox: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    `,
    TopContent: styled.div`
        position: relative;
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media ${({ theme }) => theme.media_query.medium} {
        }
    `,
    BottomContent: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: top;
    `,

    Text: styled.div`
        position: absolute;
        bottom: 30px;
        font-size: ${({ theme }) => theme.font_size.large.title_03};
        @media ${({ theme }) => theme.media_query.medium} {
            font-size: ${({ theme }) => theme.font_size.medium.title_03};
        }
        @media ${({ theme }) => theme.media_query.small} {
            font-size: ${({ theme }) => theme.font_size.small.title_03};
        }
    `,
};

export default S;
