import { useCallback, useState } from "react";
import S from "./index.styled";

interface ContactInputPorps {
  placeholder: string;
  title: string;
  type: "input" | "textarea";
}

function ContactInput({ placeholder, title, type }: ContactInputPorps) {
  const [active, setActive] = useState(false);
  const onFocus = useCallback(() => {
    setActive(true);
  }, [active]);
  const onBlur = useCallback(() => {
    setActive(false);
  }, [active]);
  return (
    <S.Container>
      {type === "input" ? (
        <S.Input
          placeholder={active ? "" : placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      ) : (
        <S.TextArea
          placeholder={active ? "" : placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}

      <S.Label $active={active}>{title}</S.Label>
    </S.Container>
  );
}

export default ContactInput;
