import { styled } from 'styled-components';
import { ItemType } from '../../../util/ProjectsConfig';

interface ItemListProps {
    currentItem: number;
}

interface ArrowButtonProps {
    currentItem: number;
    projectItems: ItemType[];
}

const ArrowButtonCommonStlye = styled.button<ArrowButtonProps>`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    padding-bottom: 20%;
    justify-content: center;
    flex-grow: 1;
    color: ${({ theme }) => theme.color.white};
    background: none;
    border: none;
    cursor: pointer;

    transition: 280ms;
    font-size: ${({ theme }) => theme.font_size.large.title_01};
    @media ${({ theme }) => theme.media_query.medium} {
        font-size: ${({ theme }) => theme.font_size.medium.title_01};
    }
    @media ${({ theme }) => theme.media_query.small} {
        font-size: ${({ theme }) => theme.font_size.small.title_01};
    }
`;

const S = {
    Container: styled.div`
        height: 500px;
        display: flex;

        justify-content: space-between;
        @media ${({ theme }) => theme.media_query.small} {
            height: 300px;
        }
    `,
    PrevButton: styled(ArrowButtonCommonStlye)`
        pointer-events: ${({ currentItem }) => (currentItem === 0 ? `none` : ``)};
        color: ${({ theme, currentItem }) => (currentItem === 0 ? theme.color.primary_500 : theme.color.white)};
    `,
    NextButton: styled(ArrowButtonCommonStlye)`
        pointer-events: ${({ currentItem, projectItems }) => (currentItem === projectItems.length - 1 ? `none` : ``)};
        color: ${({ theme, currentItem, projectItems }) =>
            currentItem === projectItems.length - 1 ? theme.color.primary_500 : theme.color.white};
    `,

    ShowBox: styled.div`
        width: 300px;
        position: relative;
        overflow: hidden;
    `,

    ItemList: styled.div<ItemListProps>`
        height: 100%;
        display: flex;
        transition: 280ms;
        transform: ${({ currentItem }) => `translateX(-${currentItem * 3}00px)`};
        position: absolute;
    `,
};

export default S;
