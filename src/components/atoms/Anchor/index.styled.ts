import { FontSizeType, FontWeightType } from "@/styles/theme";

import { styled } from "styled-components";

interface AnchorCommonProps {
  font_size: keyof FontSizeType;
  font_weight: keyof FontWeightType;
}

const AnchorCommonStyle = styled.a<AnchorCommonProps>`
  font-size: ${({ theme, font_size }) => theme.font_size.large[font_size]};
  font-weight: ${({ theme, font_weight }) => theme.font_weight[font_weight]};

  @media ${({ theme }) => theme.media_query.medium} {
    font-size: ${({ theme, font_size }) => theme.font_size.medium[font_size]};
  }

  @media ${({ theme }) => theme.media_query.small} {
    font-size: ${({ theme, font_size }) => theme.font_size.small[font_size]};
  }
`;

const S = {
  Anchor: styled(AnchorCommonStyle)`
    color: ${({ theme }) => theme.color.primary_700};
    position: relative;
    transition: 280ms;

    &::before {
      content: "";
      z-index: -1;
      background-color: ${({ theme }) => theme.color.primary_700};
      width: 0%;
      height: 100%;
      top: 0;
      left: -10%;
      transition: 280ms;
      position: absolute;
    }

    //hover
    &:hover {
      color: ${({ theme }) => theme.color.white};
      &::before {
        width: 120%;
      }
    }

    //active
    &:active::before {
      background-color: ${({ theme }) => theme.color.primary_600};
    }

    //focus
    &:focus {
      color: ${({ theme }) => theme.color.primary_700};
      &::before {
        border: ${({ theme }) => theme.color.gray_600};
        background-color: ${({ theme }) => theme.color.white};
      }
    }
  `,

  DisabledAnchor: styled(AnchorCommonStyle)`
    pointer-events: none;
    color: ${({ theme }) => theme.color.gray_600};
  `,
};

export default S;
