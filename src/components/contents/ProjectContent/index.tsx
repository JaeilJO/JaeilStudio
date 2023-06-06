import ProjectsCarousel from "../../ProjectsCarousel";
import S from "./index.styled";

function ProjectContent() {
  return (
    <S.ContentBox>
      <S.Title>Projects</S.Title>
      <S.Main>
        <ProjectsCarousel />
      </S.Main>
    </S.ContentBox>
  );
}

export default ProjectContent;
