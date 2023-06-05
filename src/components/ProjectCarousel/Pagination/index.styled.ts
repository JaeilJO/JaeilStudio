import { styled } from 'styled-components';

const S = {
    Container: styled.div`
        background-color: antiquewhite;
    `,
    Pagination: styled.div`
        display: flex;
        gap: 0.5em;

        width: fit fit-content;
    `,
    PaginationItem: styled.button`
        width: 0.5em;
        height: 0.5em;
        background-color: ${({ theme }) => theme.color.primary_500};

        border: none;
        cursor: pointer;
        &:hover {
            background-color: white;
        }
    `,
};

export default S;
