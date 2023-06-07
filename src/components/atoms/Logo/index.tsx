import { FontSizeType, FontWeightType } from '@/styles/theme';
import S from './index.styled';

interface LogoProps {
    font_size: keyof FontSizeType;
    font_weight: keyof FontWeightType;
}

function Logo({ font_size, font_weight }: LogoProps) {
    return (
        <S.Logo font_size={font_size} font_weight={font_weight}>
            JAEIL-STUDIO
        </S.Logo>
    );
}

export default Logo;
