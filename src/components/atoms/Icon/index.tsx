import { FontSizeType, FontWeightType } from '@/styles/theme';
import S from './index.styled';
import { useCallback, useState } from 'react';

interface IconProps {
    icon?: React.JSX.Element;
    type?: 'white' | 'black';
    text?: string;
    font_size: keyof FontSizeType;
    font_weight: keyof FontWeightType;
    $disabled?: boolean;
    on_click?: React.MouseEventHandler<HTMLDivElement>;
}

function Icon({ icon, text, type = 'white', font_size, font_weight, on_click, $disabled = false }: IconProps) {
    const [hover, setHover] = useState(false);
    const isHover = useCallback(() => {
        setHover(true);
    }, [hover]);

    const isNotHover = useCallback(() => {
        setHover(false);
    }, [hover]);

    if (type === 'black') {
        return (
            <S.IconBoxBlack
                $disabled={$disabled}
                font_size={font_size}
                font_weight={font_weight}
                onClick={on_click}
                onMouseOver={isHover}
                onMouseLeave={isNotHover}
            >
                <S.Icon $hover={hover}>{icon}</S.Icon>

                <S.Text $hover={hover}>{text}</S.Text>
            </S.IconBoxBlack>
        );
    }

    return (
        <S.IconBoxWhite
            $disabled={$disabled}
            font_size={font_size}
            font_weight={font_weight}
            onClick={on_click}
            onMouseOver={isHover}
            onMouseLeave={isNotHover}
        >
            <S.Icon $hover={hover}>{icon}</S.Icon>

            <S.Text $hover={hover}>{text}</S.Text>
        </S.IconBoxWhite>
    );
}

export default Icon;
