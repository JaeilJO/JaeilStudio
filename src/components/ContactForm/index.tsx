import { BsFillSendFill } from 'react-icons/bs';
import Button from '../atoms/Button';
import S from './index.styled';
import ContactInput from './ContactInput';
import { useContactStore } from '@/zustand/store';
import { MouseEventHandler, useState } from 'react';

function ContactForm() {
    const [email, name, message] = useContactStore((state) => [state.email, state.name, state.message]);
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const sendMail = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (email === '') {
            setEmailError(true);
        }
        if (name === '') {
            setNameError(true);
        }
        if (message === '') {
            setMessageError(true);
        }

        console.log({ email: email, name: name, message: message });
    };

    return (
        <S.Form>
            <ContactInput placeholder="Please enter your Name" title="Name" type="input" />
            <ContactInput placeholder="Please enter your E-mail" title="E-mail" type="input" />
            <ContactInput placeholder="Please enter your Message" title="Message" type="textarea" />

            <Button
                text={'Submit'}
                font_size={'sub_title_02'}
                font_weight={'light'}
                icon={<BsFillSendFill />}
                on_click={sendMail}
            />
        </S.Form>
    );
}

export default ContactForm;
