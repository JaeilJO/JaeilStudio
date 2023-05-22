import { FontSizeType, FontWeightType } from '@/styles/theme';
import S from './index.styled';

interface AnchorProps {
    text: string;
    href: string;
    disabled?: boolean;
    font_size: keyof FontSizeType;
    font_weight: keyof FontWeightType;
}

const Anchor = ({ text, href, disabled = false, font_size, font_weight }: AnchorProps) => {
    if (disabled) {
        return (
            <S.DisabledAnchor font_size={font_size} font_weight={font_weight} href={`#${href}`}>
                {text}
            </S.DisabledAnchor>
        );
    }

    return (
        <S.Anchor font_size={font_size} font_weight={font_weight} href={`#${href}`}>
            {text}
        </S.Anchor>
    );
};

export default Anchor;
