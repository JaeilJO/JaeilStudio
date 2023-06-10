import { styled } from 'styled-components';

const ContantCommonStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
`;

const S = {
    Container: styled.div`
        width: 100%;
        height: 100%;
        display: flex;

        justify-content: space-between;

        @media ${({ theme }) => theme.media_query.small} {
            flex-direction: column;
            justify-content: initial;
            gap: 30px;
        }
    `,

    Left: styled(ContantCommonStyle)`
        font-size: ${({ theme }) => theme.font_size.large.title_02};
        font-weight: ${({ theme }) => theme.font_weight.medium};
        @media ${({ theme }) => theme.media_query.medium} {
            font-size: ${({ theme }) => theme.font_size.medium.title_02};
            padding: 0 50px;
        }
        @media ${({ theme }) => theme.media_query.small} {
            font-size: ${({ theme }) => theme.font_size.small.title_02};
            align-items: flex-end;
            height: 50%;
        }
    `,

    Right: styled(ContantCommonStyle)`
        @media ${({ theme }) => theme.media_query.medium} {
            padding: 50px;
        }
        @media ${({ theme }) => theme.media_query.small} {
            align-items: flex-start;
        }
    `,
};

export default S;
