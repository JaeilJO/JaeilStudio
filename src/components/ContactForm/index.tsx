import Button from '../atoms/Button';
import S from './index.styled';

function ContactForm() {
    return (
        <S.Form>
            <input></input>
            <input></input>
            <input></input>
            <Button text={'Submit'} font_size={'title_01'} font_weight={'light'} />
        </S.Form>
    );
}

export default ContactForm;
