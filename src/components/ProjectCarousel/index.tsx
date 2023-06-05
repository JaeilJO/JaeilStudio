import MainBox from './MainBox';
import Pagination from './Pagination';
import S from './index.styied';

function ProjectCarousel() {
    return (
        <S.Container>
            <Pagination />
            <MainBox />
        </S.Container>
    );
}

export default ProjectCarousel;
