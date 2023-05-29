import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import S from "./index.styled";
import { useCallback, useState } from "react";

function SkillSelector() {
  const items = [
    { key: 1, title: "Next.js" },
    { key: 2, title: "JavaScript" },
    { key: 3, title: "Styled Components" },
  ];

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
          {items.map((item) => (
            <S.SelectorItemLi key={item.key}>{item.title}</S.SelectorItemLi>
          ))}
        </S.SelectorItemUL>
      </S.Selector>

      <S.SelectorButton
        onClick={downButtonHandler}
        disabled={currentItem + 1 === items.length ? true : false}
      >
        <BsCaretDownFill />
      </S.SelectorButton>
    </S.SelectorBox>
  );
}

export default SkillSelector;
