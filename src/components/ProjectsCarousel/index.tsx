import { useState } from 'react';
import MainBox from './MainBox';
import Pagination from './Pagination';
import S from './index.styled';
import ProjectsConfig from '../../util/ProjectsConfig';

function ProjectsCarousel() {
    const [currentItem, setCurrentItem] = useState(1);
    return (
        <S.Container>
            <Pagination projectItems={ProjectsConfig} currentItem={currentItem} setCurrentItem={setCurrentItem} />
            <MainBox projectItems={ProjectsConfig} currentItem={currentItem} setCurrentItem={setCurrentItem} />
        </S.Container>
    );
}

export default ProjectsCarousel;
