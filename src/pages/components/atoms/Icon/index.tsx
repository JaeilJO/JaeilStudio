import { FontSizeType, FontWeightType } from '@/styles/theme';
import S from './index.styled';
import { useCallback, useState } from 'react';

interface IconProps {
    icon: any;
    text: string;
    font_size: keyof FontSizeType;
    font_weight: keyof FontWeightType;
    on_click?: React.MouseEventHandler<HTMLDivElement>;
}

function Icon({ icon, text, font_size, font_weight, on_click }: IconProps) {
    const [hover, setHover] = useState(false);
    const isHover = useCallback(() => {
        setHover(true);
    }, [hover]);

    const isNotHover = useCallback(() => {
        setHover(false);
    }, [hover]);

    return (
        <S.IconBox
            font_size={font_size}
            font_weight={font_weight}
            onClick={on_click}
            onMouseOver={isHover}
            onMouseLeave={isNotHover}
        >
            <S.Icon $hover={hover}>{icon}</S.Icon>

            <S.Text $hover={hover}>{text}</S.Text>
        </S.IconBox>
    );
}

export default Icon;
