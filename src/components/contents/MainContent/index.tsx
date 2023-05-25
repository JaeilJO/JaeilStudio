import S from "./index.styled";
import Face from "../../../../public/face.png";

function AboutContent() {
  return (
    <S.ContentBox>
      <S.TextBox>
        <S.MainText>Hello, I'm Jaeil Jo</S.MainText>
        <S.SubText>Frontend developer</S.SubText>
      </S.TextBox>
      <S.ImageBox>
        <S.Image src={Face} alt="FaceImage" width={300}></S.Image>
      </S.ImageBox>
    </S.ContentBox>
  );
}

export default AboutContent;
