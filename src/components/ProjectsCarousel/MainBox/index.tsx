import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import S from "./index.styled";

function MainBox() {
  return (
    <S.Container>
      <S.ArrowBox>
        <BsChevronCompactLeft />
      </S.ArrowBox>
      <S.ShowBox>
        <S.ItemList>
          <S.Item>
            <></>
          </S.Item>
          <S.Item></S.Item>
          <S.Item></S.Item>
        </S.ItemList>
      </S.ShowBox>
      <S.ArrowBox>
        <BsChevronCompactRight />
      </S.ArrowBox>
    </S.Container>
  );
}

export default MainBox;
