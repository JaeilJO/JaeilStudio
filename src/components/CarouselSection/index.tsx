import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Section from '../Section';
import S from './index.styled';
import { useCallback, useState } from 'react';

interface CarouselSectionProps {
    key: number;
    id?: string;
    contents?: React.ReactNode[];
    type?: 'black' | 'white';
}

function CarouselSection({ key, id, contents, type }: CarouselSectionProps) {
    if (contents === undefined) return <></>;
    const [currentPage, setCurrentPage] = useState(0);
    const max_page_count = contents?.length - 1;

    const slideButtonRightHandelr = useCallback(() => {
        setCurrentPage(currentPage + 1);
    }, [currentPage]);
    const slideButtonLeftHandler = useCallback(() => {
        setCurrentPage(currentPage - 1);
    }, [currentPage]);

    return (
        <S.CarouselBox id={id}>
            {/* Arrow */}
            {currentPage === 0 ? (
                <></>
            ) : (
                <S.LeftSlideButton button_color={type} onClick={slideButtonLeftHandler}>
                    <BsChevronLeft />
                </S.LeftSlideButton>
            )}

            <S.Slider current_page={currentPage}>
                {contents.map((content, index) => (
                    <Section key={`${key}_${index}`} content={content} type={type} />
                ))}
            </S.Slider>

            {/* Arrow */}
            {currentPage === max_page_count ? (
                <></>
            ) : (
                <S.RightSlideButton button_color={type} onClick={slideButtonRightHandelr}>
                    <BsChevronRight />
                </S.RightSlideButton>
            )}
        </S.CarouselBox>
    );
}

export default CarouselSection;
