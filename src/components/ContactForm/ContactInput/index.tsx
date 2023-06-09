import S from "./index.styled";

interface ContactInputPorps {
  placeholder: string;
  title: string;
}

function ContactInput({ placeholder, title }: ContactInputPorps) {
  return (
    <S.Container>
      <S.Input placeholder={placeholder} />
      <S.Label>{title}</S.Label>
    </S.Container>
  );
}

export default ContactInput;
