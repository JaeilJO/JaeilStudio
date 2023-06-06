import MainBox from "./MainBox";
import Pagination from "./Pagination";
import S from "./index.styled";

function ProjectsCarousel() {
  return (
    <S.Container>
      <Pagination />
      <MainBox />
    </S.Container>
  );
}

export default ProjectsCarousel;
