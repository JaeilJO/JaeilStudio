import S from './index.styled';

function MainBox() {
    return (
        <S.Container>
            <S.ArrowBox></S.ArrowBox>
            <S.ShowBox>
                <S.ContentList>
                    <div>Hello</div>
                </S.ContentList>
            </S.ShowBox>
            <S.ArrowBox></S.ArrowBox>
        </S.Container>
    );
}

export default MainBox;
