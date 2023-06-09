import { styled } from "styled-components";

const ContantCommonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: coloum;
  `,

  Left: styled(ContantCommonStyle)`
    font-size: ${({ theme }) => theme.font_size.large.title_01};
    font-weight: ${({ theme }) => theme.font_weight.medium};
  `,

  Right: styled(ContantCommonStyle)``,
};

export default S;
