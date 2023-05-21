import { DefaultTheme } from "styled-components";

const color = {
  primary_700: `#202020`,
  primary_600: `#383838`,
  primary_500: `#5f5f5f`,
  gray_700: `#c6c6c6`,
  gray_600: `#dcdcdc`,
  gray_500: "#efefef",
  white: `#ffffff`,
  danger: `#f16464`,
  warn: `#f5ab35`,
  success: `#47c1c3`,
};

const font_size = {
  title_01: `9.6rem`,
  title_02: `6.4rem`,
  title_03: `4.8rem`,
  sub_title_01: `4rem`,
  sub_title_02: `3.6rem`,
  sub_title_03: `3.2rem`,
  body_01: `2rem`,
  body_02: `1.6rem`,
};

const font_weight = {
  light: 300,
  regular: 400,
  medium: 500,
};

export type FontWeightType = typeof font_weight;
export type FontSizeType = typeof font_size;
export type ColorType = typeof color;

const theme: DefaultTheme = {
  color: color,
  font_size: font_size,
  font_weight: font_weight,
};

export default theme;
