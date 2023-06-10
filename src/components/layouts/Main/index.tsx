import CarouselSection from '../../CarouselSection';
import Section from '../../Section';
import S from './index.styled';
import { MainConfigItemsType } from '@/util/MainConfig';

function Main({ items }: MainConfigItemsType) {
    return (
        <S.Main>
            {items.map((item) => {
                if (item.carousel === true) {
                    return (
                        <CarouselSection
                            key={item.key}
                            item_key={item.key}
                            id={item.id}
                            contents={item.contents}
                            type={item.type}
                        />
                    );
                }
                return <Section key={item.key} id={item.id} content={item.content} type={item.type} />;
            })}
        </S.Main>
    );
}

export default Main;
