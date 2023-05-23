import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Icon from '../atoms/Icon';
import S from './index.styled';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    type?: 'black' | 'white';
    option: {
        left: boolean;
        right: boolean;
    };
}

function Section({ children, type = 'white', option, id }: SectionProps) {
    return (
        <S.SectionBox type={type} id={id}>
            <S.SectionArrowBox>
                {option.left === true ? (
                    <Icon type={type} icon={<BsChevronLeft />} font_size={'title_03'} font_weight={'light'} />
                ) : (
                    <></>
                )}
            </S.SectionArrowBox>
            <S.Section>{children}</S.Section>
            <S.SectionArrowBox>
                {option.right === true ? (
                    <Icon type={type} icon={<BsChevronRight />} font_size={'title_03'} font_weight={'light'} />
                ) : (
                    <></>
                )}
            </S.SectionArrowBox>
        </S.SectionBox>
    );
}

export default Section;
