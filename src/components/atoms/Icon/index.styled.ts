import { FontSizeType, FontWeightType } from "@/styles/theme";
import { styled } from "styled-components";

interface IconBoxProps {
  font_size: keyof FontSizeType;
  font_weight: keyof FontWeightType;
  $disabled?: boolean;
}
interface TextProps {
  $hover: boolean;
}

interface IconProps {
  $hover: boolean;
}

const CommonIconBoxStyle = styled.div<IconBoxProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: max-content;

  justify-content: center;
  align-items: center;
  height: fit-content;
  transition: 280ms;

  cursor: pointer;

  pointer-events: ${({ $disabled }) => ($disabled ? `none` : ``)};
  font-size: ${({ font_size, theme }) => theme.font_size.large[font_size]};
  font-weight: ${({ font_weight, theme }) => theme.font_weight[font_weight]};

  @media ${({ theme }) => theme.media_query.medium} {
    font-size: ${({ theme, font_size }) => theme.font_size.medium[font_size]};
  }

  @media ${({ theme }) => theme.media_query.small} {
    font-size: ${({ theme, font_size }) => theme.font_size.small[font_size]};
  }
`;

const S = {
  IconBoxWhite: styled(CommonIconBoxStyle)`
    color: ${({ $disabled, theme }) =>
      $disabled ? theme.color.gray_600 : theme.color.primary_700};
    &:hover {
      color: ${({ theme }) => theme.color.primary_500};
    }

    &:active {
      color: ${({ theme }) => theme.color.primary_600};
    }
  `,

  IconBoxBlack: styled(CommonIconBoxStyle)`
    color: ${({ $disabled, theme }) =>
      $disabled ? theme.color.gray_600 : theme.color.white};
    &:hover {
      color: ${({ theme }) => theme.color.gray_500};
    }

    &:active {
      color: ${({ theme }) => theme.color.gray_600};
    }
  `,

  Text: styled.div<TextProps>`
    position: absolute;
    transition: 280ms;
    pointer-events: none;

    top: ${({ $hover }) => ($hover ? `70%` : `30%`)};
    opacity: ${({ $hover }) => ($hover ? `100%` : `0%`)};
    font-size: 0.5em;
  `,
  Icon: styled.div<IconProps>`
    position: relative;
    transition: 280ms;
    top: ${({ $hover }) => ($hover ? `-0.1em` : `0`)};
  `,
};

export default S;
