import { styled } from "styled-components";

const S = {
  Container: styled.div`
    position: relative;
    width: 90vw;
    height: 90vh;
    display: flex;
    gap: 20px;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.primary_500};
    border-radius: 0.5em;
    padding: 20px;
    @media ${({ theme }) => theme.media_query.medium} {
      gap: 15px;
    }

    @media ${({ theme }) => theme.media_query.small} {
      gap: 10px;
      flex-direction: column;
    }
  `,
  CloseButton: styled.button`
    position: absolute;
    width: 80px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    margin: 0;
    border: none;
    background-color: ${({ theme }) => theme.color.danger};
    border-radius: 1em;
    color: ${({ theme }) => theme.color.white};
    transition: 280ms;
    top: 3px;
    right: 20px;
    cursor: pointer;

    &:hover {
      width: 50px;
      padding: 0 30px;
      height: 30px;
      top: 10px;
      background-color: ${({ theme }) => theme.color.danger};
      font-size: ${({ theme }) => theme.font_size.large.body_02};
    }
    &:active {
      background-color: ${({ theme }) => theme.color.gray_700};
    }
  `,
  NoneVideo: styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.primary_600};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.font_size.large.body_02};
    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.body_02};
    }
    border-radius: 0.5em;

    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.body_02};
    }
  `,
  Video: styled.div`
    width: 100%;
    height: 100%;
    background-color: aqua;
  `,
  InfoBox: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    @media ${({ theme }) => theme.media_query.medium} {
      gap: 0.3em;
    }

    @media ${({ theme }) => theme.media_query.small} {
      gap: 0.1em;
    }
  `,
  Title: styled.div`
    font-size: ${({ theme }) => theme.font_size.large.title_01};
    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.title_01};
    }

    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.title_01};
    }
  `,
  Skills: styled.div`
    font-size: ${({ theme }) => theme.font_size.large.sub_title_03};
    gap: 0.3em;

    display: flex;
    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.sub_title_03};
    }

    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.sub_title_03};
    }
  `,
  SubScribeTitle: styled.div`
    font-size: ${({ theme }) => theme.font_size.large.title_03};
    position: relative;
    height: fit-content;
    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.title_03};
    }

    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.title_03};
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 90%;
      height: 2px;
      background-color: ${({ theme }) => theme.color.primary_700};
    }
  `,
  SubTitleBox: styled.div`
    width: 100%;
    height: 100%;
    word-break: break-all;
    overflow-y: scroll;
    padding: 0 10px 0 0;
    transition: 280ms;
    font-weight: ${({ theme }) => theme.font_weight.light};
    font-size: ${({ theme }) => theme.font_size.large.body_01};
    overflow-x: hidden;
    @media ${({ theme }) => theme.media_query.medium} {
      font-size: ${({ theme }) => theme.font_size.medium.body_01};
    }

    @media ${({ theme }) => theme.media_query.small} {
      font-size: ${({ theme }) => theme.font_size.small.body_01};
    }
  `,
  ButtonBox: styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  `,
};

export default S;
