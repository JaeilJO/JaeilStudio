import { NavigationItem } from "@/components/Navigation";
import { FontSizeType } from "@/styles/theme";
import { BsBootstrapFill, BsGithub } from "react-icons/bs";

interface NavConfigType {
  options: {
    font_size: keyof FontSizeType;
  };
  items: NavigationItem[];
}

const NavConfig: NavConfigType = {
  options: {
    font_size: "sub_title_03",
  },
  items: [
    { key: 1, type: "anchor", text: "Home", href: "home" },
    { key: 1, type: "anchor", text: "About", href: "about" },
    { key: 2, type: "anchor", text: "Skills", href: "skills" },
    { key: 3, type: "anchor", text: "Works", href: "works" },
    { key: 4, type: "anchor", text: "About", href: "contact" },
    { key: 5, type: "icon", icon: <BsGithub />, text: "Github" },
    { key: 6, type: "icon", icon: <BsBootstrapFill />, text: "Blog" },
  ],
};

export default NavConfig;
