import { TextareaHTMLAttributes, useCallback, useRef, useState } from "react";
import S from "./index.styled";

interface ContactInputPorps {
  placeholder: string;
  title: string;
  type: "input" | "textarea";
}

function ContactInput({ placeholder, title, type }: ContactInputPorps) {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null); // textarea를 위한 ref 추가

  const onFocus = useCallback(() => {
    setActive(true);
  }, [active]);

  const onBlur = useCallback(() => {
    setActive(
      inputRef.current?.value !== "" && textareaRef.current?.value !== ""
    );
  }, [active]);
  return (
    <S.Container>
      {type === "input" ? (
        <S.Input
          placeholder={active ? "" : placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputRef}
        />
      ) : (
        <S.TextArea
          placeholder={active ? "" : placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={textareaRef}
        />
      )}

      <S.Label $active={active}>{title}</S.Label>
    </S.Container>
  );
}

export default ContactInput;
