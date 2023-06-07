import NavConfig from '../../../util/NavConfig';
import Navigation from '../../Navigation';
import Logo from '../../atoms/Logo';
import S from './index.styled';

function Header() {
    return (
        <S.Header>
            <Logo font_size={'sub_title_03'} font_weight={'medium'} />
            <Navigation options={NavConfig.options} items={NavConfig.items} />
        </S.Header>
    );
}

export default Header;
