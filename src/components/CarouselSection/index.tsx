import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Section from "../Section";
import S from "./index.styled";
import { useCallback, useState } from "react";

interface CarouselSectionProps {
  options: {
    type: "black" | "white";
  };
  carousel_items?: [];
}

const carousel_items = [{ key: 1, item: <></> }];

function CarouselSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const slideButtonRightHandelr = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);
  const slideButtonLeftHandler = useCallback(() => {
    setCurrentPage(currentPage - 1);
  }, [currentPage]);
  return (
    <S.CarouselBox>
      <S.SlideButton button_color={"black"} direction={"left"}>
        <BsChevronLeft />
      </S.SlideButton>
      <S.Slider>
        <Section
          key={1}
          id={""}
          content={
            <div
              style={{ backgroundColor: "red", width: "100%", height: "100%" }}
            >
              Hello
            </div>
          }
        />
        <Section
          key={2}
          id={""}
          content={
            <div
              style={{
                backgroundColor: "green",
                width: "100%",
                height: "100%",
              }}
            >
              Hi
            </div>
          }
        />
      </S.Slider>
      <S.SlideButton direction={"right"}>
        <BsChevronRight />
      </S.SlideButton>
    </S.CarouselBox>
  );
}

export default CarouselSection;
