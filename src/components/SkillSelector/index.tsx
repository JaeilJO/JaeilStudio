import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import S from "./index.styled";
import { useCallback, useState } from "react";
import Skills from "../../util/SkillConfig";

function SkillSelector() {
  const [currentItem, setCurrentItem] = useState(0);

  const upButtonHandler = useCallback(() => {
    setCurrentItem(currentItem - 1);
  }, [currentItem]);

  const downButtonHandler = useCallback(() => {
    setCurrentItem(currentItem + 1);
  }, [currentItem]);

  return (
    <S.SelectorBox>
      <S.SelectorButton
        onClick={upButtonHandler}
        disabled={currentItem === 0 ? true : false}
      >
        <BsCaretUpFill />
      </S.SelectorButton>

      <S.Selector>
        <S.SelectorItemUL current_item={currentItem}>
          {Skills.map((item) => (
            <S.SelectorItemLi key={item.key}>{item.title}</S.SelectorItemLi>
          ))}
        </S.SelectorItemUL>
      </S.Selector>

      <S.SelectorButton
        onClick={downButtonHandler}
        disabled={currentItem + 1 === Skills.length ? true : false}
      >
        <BsCaretDownFill />
      </S.SelectorButton>
    </S.SelectorBox>
  );
}

export default SkillSelector;
