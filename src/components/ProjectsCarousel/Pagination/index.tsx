import { Dispatch, SetStateAction } from 'react';
import S from './index.styled';
import { ItemType } from '../../../util/ProjectsConfig';

interface PaginationProps {
    currentItem: number;
    setCurrentItem: Dispatch<SetStateAction<number>>;
    projectItems: ItemType[];
}

function Pagination({ currentItem, setCurrentItem, projectItems }: PaginationProps) {
    const currentItmeHandler = (key: number) => {
        setCurrentItem(key);
    };

    return (
        <S.Container>
            <S.PaginationItemList>
                {projectItems.map((item) => (
                    <S.PaginationItem
                        key={item.key}
                        $is_current={item.key === currentItem}
                        onClick={() => currentItmeHandler(item.key)}
                    />
                ))}
            </S.PaginationItemList>
        </S.Container>
    );
}

export default Pagination;
