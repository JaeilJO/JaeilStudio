import S from "./index.styled";

interface AnchorProps {
  text: string;
  href: string;
  disabled?: boolean;
}

const Anchor = ({ text, href, disabled = false }: AnchorProps) => {
  if (disabled) {
    return <S.DisabledAnchor href={`#${href}`}>{text}</S.DisabledAnchor>;
  }
  return <S.Anchor href={`#${href}`}>{text}</S.Anchor>;
};

export default Anchor;
