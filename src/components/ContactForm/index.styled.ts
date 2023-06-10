import { styled } from 'styled-components';

const S = {
    Form: styled.form`
        display: flex;
        width: 33rem;
        flex-direction: column;
        gap: 5rem;
    `,
    Input: styled.input`
        position: relative;
        width: 100%;
        height: 5rem;
        font-size: ${({ theme }) => theme.font_size.large.body_01};
        font-weight: ${({ theme }) => theme.font_weight.light};
        padding: 10px;
        border: 1px solid ${({ theme }) => theme.color.gray_700};
        border-radius: 0.3em;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
            'Open Sans', 'Helvetica Neue', sans-serif;
        &:focus {
            outline: none;
        }
    `,
    SubmitButton: styled.input``,
};

export default S;
