import { BsBootstrap, BsGithub } from 'react-icons/bs';
import Anchor from '../atoms/Anchor';
import { IconType } from 'react-icons';
import Icon from '../atoms/Icon';
import S from './index.styled';
import { FontSizeType } from '@/styles/theme';

interface NavigationItem {
    id: number;
    type: 'anchor' | 'icon';
    text: string;
    href?: string;
    icon?: IconType;
}

interface NavigationProps {
    options: {
        font_size: keyof FontSizeType;
    };
    items: NavigationItem[];
}

function Navigation({ options, items }: NavigationProps) {
    return (
        <S.Navigation>
            {items.map((item) => {
                if (item.type === 'anchor') {
                    return (
                        <Anchor
                            text={item.text}
                            href={item.href}
                            font_size={options.font_size}
                            font_weight={'regular'}
                        />
                    );
                }

                return <Icon icon={item.icon} text={item.text} font_size={options.font_size} font_weight={'medium'} />;
            })}
        </S.Navigation>
    );
}

export default Navigation;
