import { ReactElement, useCallback } from "react";
import S from "./index.styled";

interface SkillAccordionItemPorps {
  $isSelect: boolean;
  icon: ReactElement;
  title: string;

  setCurrentItem: any;
}

function SkillAccordionItem({
  $isSelect,
  icon,
  title,
  setCurrentItem,
}: SkillAccordionItemPorps) {
  const itemHandler = useCallback(() => {
    setCurrentItem(title);
  }, []);
  return (
    <S.ItemBox $isSelect={$isSelect} onClick={itemHandler} id={title}>
      <S.LogoBox>{$isSelect ? icon : ""}</S.LogoBox>
      <S.TitleBox>{$isSelect ? title : ""}</S.TitleBox>
    </S.ItemBox>
  );
}

export default SkillAccordionItem;
