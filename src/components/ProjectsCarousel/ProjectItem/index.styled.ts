import Image from 'next/image';
import { styled } from 'styled-components';

const S = {
    Container: styled.div`
        width: 300px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25em;

        color: ${({ theme }) => theme.color.white};
        align-items: center;
    `,
    NoneImage: styled.div`
        width: 300px;
        height: 400px;
        border-radius: 0.3em;
        transition: 280ms;
        background-color: ${({ theme }) => theme.color.primary_500};
        cursor: pointer;
        &:hover {
            background-color: ${({ theme }) => theme.color.gray_700};
        }
    `,
    Image: styled(Image)`
        width: 300px;
        height: 400px;
    `,
    Title: styled.div`
        text-align: center;
    `,
};

export default S;
