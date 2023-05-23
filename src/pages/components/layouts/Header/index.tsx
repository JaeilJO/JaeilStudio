import Navigation from "../../Navigation";
import Logo from "../../atoms/Logo";
import S from "./index.styled";
import { NavigationItems } from "./NavigationItems";
import Icon from "../../atoms/Icon";

function Header() {
  return (
    <S.Header>
      <Logo font_size={"sub_title_03"} font_weight={"medium"} />

      <Navigation
        options={NavigationItems.options}
        items={NavigationItems.items}
      />
    </S.Header>
  );
}

export default Header;
