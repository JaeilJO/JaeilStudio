import { useState } from 'react';
import MainBox from './MainBox';
import Pagination from './Pagination';
import S from './index.styled';
import ProjectsConfig from '../../util/ProjectsConfig';

function ProjectsCarousel() {
    const [current_item, set_current_item] = useState(1);
    return (
        <S.Container>
            <Pagination
                project_items={ProjectsConfig}
                current_item={current_item}
                set_current_item={set_current_item}
            />
            <MainBox project_items={ProjectsConfig} current_item={current_item} set_current_item={set_current_item} />
        </S.Container>
    );
}

export default ProjectsCarousel;
