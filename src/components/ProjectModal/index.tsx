import { useCallback, useState } from "react";
import Icon from "../atoms/Icon";
import S from "./index.styled";
import { SiNextdotjs } from "react-icons/si";

function ProjectModal({ video }) {
  video = false;
  const [isHoverCloseButton, setIsHoverCloseButton] = useState(false);
  const closeButtonMouseOver = useCallback(() => {
    setIsHoverCloseButton(true);
  }, [isHoverCloseButton]);
  const closeButtonMouseLeave = useCallback(() => {
    setIsHoverCloseButton(false);
  }, [isHoverCloseButton]);
  return (
    <S.Container>
      <S.CloseButton
        onMouseLeave={closeButtonMouseLeave}
        onMouseOver={closeButtonMouseOver}
      >
        {isHoverCloseButton ? "Close" : "X"}
      </S.CloseButton>
      {!video ? (
        <S.NoneVideo>I'm sorry, but the video is not available </S.NoneVideo>
      ) : (
        <S.Video />
      )}

      <S.InfoBox>
        <S.Title>Title</S.Title>
        <S.Skills>
          <Icon
            font_size={"sub_title_03"}
            font_weight={"light"}
            icon={<SiNextdotjs />}
            text="NextJs"
          />
          <Icon
            font_size={"sub_title_03"}
            font_weight={"light"}
            icon={<SiNextdotjs />}
          />
          <Icon
            font_size={"sub_title_03"}
            font_weight={"light"}
            icon={<SiNextdotjs />}
          />
          <Icon
            font_size={"sub_title_03"}
            font_weight={"light"}
            icon={<SiNextdotjs />}
          />
        </S.Skills>

        <S.SubScribeTitle>SubScribe</S.SubScribeTitle>
        <S.SubTitleBox>
          HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
        </S.SubTitleBox>
      </S.InfoBox>
    </S.Container>
  );
}

export default ProjectModal;
