import styled from 'styled-components';

const S = {
    Container: styled.div`
        display: flex;
        justify-content: space-between;
        height: 500px;
        background-color: azure;
    `,

    ArrowBox: styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: none;
        color: ${({ theme }) => theme.color.white};
        flex-grow: 1;
    `,

    ShowBox: styled.div`
        width: 300px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        gap: 0.25em;
        color: ${({ theme }) => theme.color.white};
    `,

    ContentList: styled.div`
        display: flex;
    `,

    ContentImage: styled.div`
        width: 300px;
        height: 400px;
        cursor: pointer;
        &:hover {
            opacity: 90%;
        }
    `,

    Title: styled.div`
        width: 100%;
        text-align: center;
    `,

    GitIcon: styled.div`
        width: 100%;
        text-align: center;
    `,
};
export default S;
