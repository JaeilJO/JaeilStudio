import Selector from "../../Selector";
import S from "./index.styled";

function SkillContent() {
  return (
    <S.ContentBox>
      <S.LeftContent>
        <S.Text>I have experience using</S.Text>
      </S.LeftContent>
      <S.RightContent>
        <Selector />
      </S.RightContent>
    </S.ContentBox>
  );
}

export default SkillContent;
