import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import S from './index.styled';
import ProjectItem from '../ProjectItem';
import { Dispatch, SetStateAction } from 'react';
import { ItemType } from '../../../util/ProjectsConfig';

interface MainBoxProps {
    currentItem: number;
    setCurrentItem: Dispatch<SetStateAction<number>>;
    projectItems: ItemType[];
}

function MainBox({ projectItems, currentItem, setCurrentItem }: MainBoxProps) {
    const PrevButtonHandler = () => {
        setCurrentItem((prev) => prev - 1);
    };

    const NextButtonHandler = () => {
        setCurrentItem((prev) => prev + 1);
    };
    return (
        <S.Container>
            <S.PrevButton projectItems={projectItems} currentItem={currentItem} onClick={PrevButtonHandler}>
                <BsChevronCompactLeft />
            </S.PrevButton>
            <S.ShowBox>
                <S.ItemList currentItem={currentItem}>
                    {projectItems.map((item) => (
                        <ProjectItem key={item.key} title={item.title} git_link={item.git_link} />
                    ))}
                </S.ItemList>
            </S.ShowBox>
            <S.NextButton projectItems={projectItems} currentItem={currentItem} onClick={NextButtonHandler}>
                <BsChevronCompactRight />
            </S.NextButton>
        </S.Container>
    );
}

export default MainBox;
