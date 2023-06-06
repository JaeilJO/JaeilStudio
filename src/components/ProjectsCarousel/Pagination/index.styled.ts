import { MouseEventHandler } from 'react';
import { styled } from 'styled-components';

interface PaginationItemProps {
    $is_current: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const S = {
    Container: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    `,
    PaginationItemList: styled.div`
        display: flex;
        gap: 0.5em;
        width: fit-content;
        justify-content: center;
    `,
    PaginationItem: styled.button<PaginationItemProps>`
        width: 2em;
        height: 0.3em;
        background-color: ${({ theme, $is_current }) => ($is_current ? theme.color.white : theme.color.primary_500)};
        transition: 280ms;
        margin: 0;
        padding: 0;
        border: none;

        cursor: pointer;
        &:hover {
            background-color: ${({ theme }) => theme.color.white};
        }
    `,
};

export default S;
