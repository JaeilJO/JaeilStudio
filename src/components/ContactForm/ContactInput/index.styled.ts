import { styled } from "styled-components";

const S = {
  Container: styled.div`
    position: relative;
  `,
  Input: styled.input`
    width: 100%;
    height: 5rem;
    font-size: ${({ theme }) => theme.font_size.large.body_01};
    font-weight: ${({ theme }) => theme.font_weight.light};
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.primary_700};
    &:focus {
      outline: none;
    }
  `,
  Label: styled.label`
    position: absolute;
    background-color: aqua;
    left: 5px;
    top: -15px;
    font-size: ${({ theme }) => theme.font_size.large.body_02};
    padding: 0.06em 0.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.primary_700};
    color: ${({ theme }) => theme.color.white};
    border-radius: 0.2em;
  `,
};

export default S;
