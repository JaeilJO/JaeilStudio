import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import S from './index.styled';
import ProjectItem from '../ProjectItem';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { ItemType } from '../../../util/ProjectsConfig';

interface MainBoxProps {
    current_item: number;
    set_current_item: Dispatch<SetStateAction<number>>;
    project_items: ItemType[];
}

function MainBox({ project_items, current_item, set_current_item }: MainBoxProps) {
    const projectItemsLength = project_items.length;
    const PrevButtonHandler = () => {
        set_current_item((prev) => prev - 1);
    };

    const NextButtonHandler = () => {
        set_current_item((prev) => prev + 1);
    };

    return (
        <S.Container>
            <S.PrevButton
                project_items_length={projectItemsLength}
                current_item={current_item}
                onClick={PrevButtonHandler}
            >
                <BsChevronCompactLeft />
            </S.PrevButton>

            <S.ShowBox>
                <S.ItemList current_item={current_item}>
                    {project_items.map((item) => (
                        <ProjectItem
                            key={item.key}
                            title={item.title}
                            git_link={item.git_link}
                            skills={item.skills}
                            sub_scribe={item.sub_scribe}
                            video={item.video}
                        />
                    ))}
                </S.ItemList>
            </S.ShowBox>

            <S.NextButton
                project_items_length={projectItemsLength}
                current_item={current_item}
                onClick={NextButtonHandler}
            >
                <BsChevronCompactRight />
            </S.NextButton>
        </S.Container>
    );
}

export default MainBox;
