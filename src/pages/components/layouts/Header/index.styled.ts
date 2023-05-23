import { styled } from "styled-components";

const S = {
  Header: styled.header`
    position: sticky;
    top: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.color.white};
    padding: 0px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${({ theme }) => theme.media_query.small} {
      flex-direction: column;
      gap: 1em;
    }
  `,
};

export default S;
