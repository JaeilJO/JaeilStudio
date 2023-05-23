import { FontSizeType } from "@/styles/theme";
import { NavigationItem } from "../../Navigation";
import { BsBootstrap, BsGithub } from "react-icons/bs";

interface NavigationItemsType {
  options: {
    font_size: keyof FontSizeType;
  };
  items: NavigationItem[];
}

export const NavigationItems: NavigationItemsType = {
  options: {
    font_size: "sub_title_03",
  },
  items: [
    { id: 1, type: "anchor", text: "About", href: "#about" },
    { id: 2, type: "anchor", text: "Skills", href: "#skills" },
    { id: 3, type: "anchor", text: "Works", href: "#works" },
    { id: 4, type: "anchor", text: "About", href: "#contact" },
    { id: 5, type: "icon", icon: <BsGithub />, text: "Github" },
    { id: 6, type: "icon", icon: <BsBootstrap />, text: "Blog" },
  ],
};
