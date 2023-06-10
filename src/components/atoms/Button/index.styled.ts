import { FontSizeType, FontWeightType } from "@/styles/theme";
import { styled } from "styled-components";

interface CommonButtonProps {
  font_size: keyof FontSizeType;
  font_weight: keyof FontWeightType;
  $disabled?: boolean;
}

const CommonButtonStyle = styled.button<CommonButtonProps>`
  padding: 0 1em;
  font-size: ${({ theme, font_size }) => theme.font_size.large[font_size]};
  font-weight: ${({ theme, font_weight }) => theme.font_weight[font_weight]};
  border: none;
  cursor: pointer;
  border-radius: 1em;
  transition: 280ms;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.color.gray_600 : theme.color.primary_700};
  color: ${({ theme }) => theme.color.white};
  pointer-events: ${({ $disabled }) => ($disabled ? `none` : ``)};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary_500};
  }
  &:active {
    background-color: ${({ theme }) => theme.color.primary_600};
  }

  @media ${({ theme }) => theme.media_query.medium} {
    font-size: ${({ theme, font_size }) => theme.font_size.medium[font_size]};
  }

  @media ${({ theme }) => theme.media_query.small} {
    font-size: ${({ theme, font_size }) => theme.font_size.small[font_size]};
  }
`;

const S = {
  Button: styled(CommonButtonStyle)``,

  IconButton: styled(CommonButtonStyle)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3em;
    gap: 0.5em;
  `,
};

export default S;
