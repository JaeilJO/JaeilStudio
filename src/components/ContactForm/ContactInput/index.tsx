import { TextareaHTMLAttributes, useCallback, useRef, useState } from 'react';
import S from './index.styled';
import { useContactStore } from '@/zustand/store';

interface ContactInputPorps {
    placeholder: string;
    title: string;
    type: 'input' | 'textarea';
}

function ContactInput({ placeholder, title, type }: ContactInputPorps) {
    const [active, setActive] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [inputEmail, inputName, inputMessage] = useContactStore((state) => [
        state.inputEmail,
        state.inputName,
        state.inputMessage,
    ]);

    const onFocus = useCallback(() => {
        setActive(true);
    }, [active]);

    const onBlur = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setActive(inputRef.current?.value !== '' && textareaRef.current?.value !== '');
            if (active && inputRef.current?.value !== '' && textareaRef.current?.value !== '') {
                switch (e.target.name) {
                    case 'email':
                        inputEmail({ email: e.target.value });
                        break;
                    case 'name':
                        inputName({ name: e.target.value });
                        break;
                    case 'message':
                        inputMessage({ message: e.target.value });
                        break;
                }
            } else if (!active || inputRef.current?.value === '' || textareaRef.current?.value === '') {
                switch (e.target.name) {
                    case 'email':
                        inputEmail({ email: '' });
                        break;
                    case 'name':
                        inputName({ name: '' });
                        break;
                    case 'message':
                        inputMessage({ message: '' });
                        break;
                }
            }
        },
        [active]
    );

    return (
        <S.Container>
            {type === 'input' ? (
                <S.Input
                    placeholder={active ? '' : placeholder}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    ref={inputRef}
                    name={title === 'E-mail' ? 'email' : 'name'}
                />
            ) : (
                <S.TextArea
                    placeholder={active ? '' : placeholder}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    ref={textareaRef}
                    name={'message'}
                />
            )}

            <S.Label $active={active}>{title}</S.Label>
        </S.Container>
    );
}

export default ContactInput;
