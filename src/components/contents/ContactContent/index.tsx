import ContactForm from '@/components/ContactForm';
import S from './index.styled';

function ContactCotent() {
    return (
        <S.Container>
            <S.Left>Contact</S.Left>
            <S.Right>
                <ContactForm />
            </S.Right>
        </S.Container>
    );
}

export default ContactCotent;
