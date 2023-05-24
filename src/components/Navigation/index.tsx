import Anchor from "../atoms/Anchor";

import Icon from "../atoms/Icon";
import S from "./index.styled";
import { FontSizeType } from "@/styles/theme";

export interface NavigationItem {
  key: number;
  type: "anchor" | "icon";
  text: string;
  href?: string;
  icon?: React.JSX.Element;
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
        if (item.type === "anchor") {
          //Anchor
          return (
            <Anchor
              key={item.key}
              text={item.text}
              href={item.href}
              font_size={options.font_size}
              font_weight={"regular"}
            />
          );
        }

        //Icon
        return (
          <Icon
            key={item.key}
            icon={item.icon}
            text={item.text}
            font_size={options.font_size}
            font_weight={"medium"}
          />
        );
      })}
    </S.Navigation>
  );
}

export default Navigation;
