import SkillAccordion from '../../SkillAccordion';

import S from './index.styled';

function SkillContent() {
    return (
        <S.ContentBox>
            <S.TopContent>
                <S.Text>I have experience with</S.Text>
            </S.TopContent>

            <S.BottomContent>
                <SkillAccordion />
            </S.BottomContent>
        </S.ContentBox>
    );
}

export default SkillContent;
