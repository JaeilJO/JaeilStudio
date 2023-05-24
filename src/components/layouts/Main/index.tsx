import Section from '/Users/jojaeil/Desktop/jaeil_studio/src/components/Section/index';
import S from './index.styled';
import { MainConfigItemsType } from '@/util/MainConfig';

function Main({ items }: MainConfigItemsType) {
    return (
        <S.Main>
            {items.map((item) => (
                <Section
                    key={item.key}
                    id={item.id}
                    content={item.content}
                    type={item.type}
                    option={{
                        left: false,
                        right: false,
                    }}
                />
            ))}
        </S.Main>
    );
}

export default Main;
