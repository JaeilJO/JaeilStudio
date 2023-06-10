import { FontSizeType, FontWeightType } from '@/styles/theme';
import S from './index.styled';

interface ButtonProps {
    text: string;
    font_size: keyof FontSizeType;
    font_weight: keyof FontWeightType;
    icon?: any;
    on_click?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

function Button({ text, font_size, font_weight, on_click, icon, disabled }: ButtonProps) {
    if (!icon) {
        return (
            <S.Button $disabled={disabled} font_size={font_size} font_weight={font_weight} onClick={on_click}>
                {text}
            </S.Button>
        );
    }

    return (
        <S.IconButton $disabled={disabled} font_size={font_size} font_weight={font_weight} onClick={on_click}>
            {icon}
            {text}
        </S.IconButton>
    );
}

export default Button;
