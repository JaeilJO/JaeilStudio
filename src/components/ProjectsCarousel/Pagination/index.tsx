import { Dispatch, SetStateAction } from 'react';
import S from './index.styled';
import { ItemType } from '../../../util/ProjectsConfig';

interface PaginationProps {
    current_item: number;
    set_current_item: Dispatch<SetStateAction<number>>;
    project_items: ItemType[];
}

function Pagination({ current_item, set_current_item, project_items }: PaginationProps) {
    const currentItmeHandler = (key: number) => {
        set_current_item(key);
    };

    return (
        <S.Container>
            <S.PaginationItemList>
                {project_items.map((item) => (
                    <S.PaginationItem
                        key={item.key}
                        $is_current={item.key === current_item}
                        onClick={() => currentItmeHandler(item.key)}
                    />
                ))}
            </S.PaginationItemList>
        </S.Container>
    );
}

export default Pagination;
