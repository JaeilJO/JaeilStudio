import { styled } from "styled-components";

interface LabelProps {
  $active: boolean;
}

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
    border: 1px solid ${({ theme }) => theme.color.gray_700};
    border-radius: 0.3em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    &:focus {
      outline: none;
    }
  `,
  TextArea: styled.textarea`
    width: 100%;
    height: 10rem;
    padding: 12px;
    font-size: ${({ theme }) => theme.font_size.large.body_02};
    font-weight: ${({ theme }) => theme.font_weight.light};
    border: 1px solid ${({ theme }) => theme.color.gray_700};
    resize: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    border-radius: 0.3em;
    &:focus {
      outline: none;
    }
  `,
  Label: styled.label<LabelProps>`
    position: absolute;
    background-color: aqua;
    left: 5px;
    top: -15px;
    height: fit-content;
    font-size: ${({ theme }) => theme.font_size.large.body_02};
    padding: ${({ $active }) => ($active ? `0.06em 0.75em;` : ``)};
    width: ${({ $active }) => ($active ? `fit-content` : `0`)};
    white-space: nowrap;
    transition: 280ms ease-out;
    opacity: ${({ $active }) => ($active ? `100%` : `0`)};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.primary_700};
    color: ${({ theme }) => theme.color.white};
    border-radius: 0.2em;
  `,
};

export default S;
