import Image from 'next/image';
import { styled } from 'styled-components';

const S = {
    ContentBox: styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        @media screen and (max-width: 900px) {
            flex-direction: column-reverse;
        }
    `,
    TextBox: styled.div`
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        transition: 280ms;

        @media screen and (max-width: 900px) {
            justify-content: flex-start;
            height: 100%;
        }
    `,
    MainText: styled.div`
        font-size: ${({ theme }) => theme.font_size.large.title_01};
        font-weight: ${({ theme }) => theme.font_weight.medium};
        text-align: right;
        transition: 280ms;
        @media screen and (max-width: 1350px) {
            font-size: ${({ theme }) => theme.font_size.medium.title_01};
        }

        @media screen and (max-width: 900px) {
            font-size: ${({ theme }) => theme.font_size.small.title_01};
            text-align: center;
        }
    `,
    SubText: styled.div`
        font-size: ${({ theme }) => theme.font_size.large.title_03};
        font-weight: ${({ theme }) => theme.font_weight.regular};

        text-align: right;
        @media screen and (max-width: 1350px) {
            font-size: ${({ theme }) => theme.font_size.medium.title_03};
        }

        @media screen and (max-width: 900px) {
            font-size: ${({ theme }) => theme.font_size.small.title_03};
            text-align: center;
        }
    `,
    ImageBox: styled.div`
        display: flex;

        width: 100%;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 900px) {
            height: 100%;
            align-items: flex-end;
        }
    `,
    Image: styled(Image)`
        transition: 280ms;
        @media screen and (max-width: 1350px) {
            width: 200px;
            height: 300px;
        }
        @media screen and (max-width: 900px) {
            width: 150px;
            height: 230px;
        }
    `,
};
export default S;
