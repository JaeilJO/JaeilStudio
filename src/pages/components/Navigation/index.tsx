import { BsBootstrap, BsGithub } from 'react-icons/bs';
import Anchor from '../atoms/Anchor';
import Icon from '../atoms/Icon';
import S from './index.styled';

function Navigation() {
    return (
        <S.Navigation>
            <Anchor text={'About'} href={''} font_size={'sub_title_01'} font_weight={'regular'} />
            <Anchor text={'About'} href={''} font_size={'sub_title_01'} font_weight={'regular'} />
            <Anchor text={'About'} href={''} font_size={'sub_title_01'} font_weight={'regular'} />
            <Anchor text={'About'} href={''} font_size={'sub_title_01'} font_weight={'regular'} />
            <Icon icon={<BsGithub />} text={'Github'} font_size={'sub_title_01'} font_weight={'light'} />
            <Icon icon={<BsBootstrap />} text={'Blog'} font_size={'sub_title_01'} font_weight={'light'} />
        </S.Navigation>
    );
}

export default Navigation;
