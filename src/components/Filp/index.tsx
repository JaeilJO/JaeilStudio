import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import S from "./index.styled";
import { useEffect, useState } from "react";

interface FlipProps {
  type: "black" | "white";
}

function Flip({ type }: FlipProps) {
  const items = ["Next.js", "JavaScript"];
  const [currentItem, setCurrenItem] = useState(0);
  const [nextItem, setNextItem] = useState(1);
  const [isFliped, setIsFilped] = useState(false);

  const downButtonHandler = () => {
    setIsFilped(true);
    setCurrenItem(currentItem + 1);
  };
  const FlipDown = () => {};
  return (
    <S.FlipBox>
      {/* UpButton */}
      <S.FlipBoxButtonUp>
        <BsFillCaretUpFill />
      </S.FlipBoxButtonUp>

      <S.FlipContainer>
        <S.FlipCardTop $is_fliped={isFliped}>
          {isFliped ? items[nextItem] : ""}
        </S.FlipCardTop>
        <S.FlipCardBottom $is_fliped={isFliped}>
          {isFliped ? items[nextItem] : ""}
        </S.FlipCardBottom>
        {items[currentItem]}
      </S.FlipContainer>

      {/* DownButton */}
      <S.FlipBoxButtonDown onClick={downButtonHandler}>
        <BsFillCaretDownFill />
      </S.FlipBoxButtonDown>
    </S.FlipBox>
  );
}

export default Flip;
