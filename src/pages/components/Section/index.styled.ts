import { styled } from 'styled-components';

interface SectionBoxProps {
    type: 'white' | 'black';
}

const S = {
    SectionBox: styled.div<SectionBoxProps>`
        background-color: ${({ theme, type }) => (type === 'white' ? theme.color.white : theme.color.primary_700)};
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
    `,
    SectionArrowBox: styled.div`
        flex-grow: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    Section: styled.section`
        flex-grow: 9;
    `,
};

export default S;
