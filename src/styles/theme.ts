import { DefaultTheme } from 'styled-components';

const color = {
    primary_700: `#202020`,
    primary_600: `#383838`,
    primary_500: `#5f5f5f`,
    gray_700: `#c6c6c6`,
    gray_600: `#dcdcdc`,
    gray_500: '#efefef',
    white: `#ffffff`,
    danger: `#f16464`,
    warn: `#f5ab35`,
    success: `#47c1c3`,
};

const font_size_large = {
    title_01: `9.6rem`,
    title_02: `6.4rem`,
    title_03: `4.8rem`,
    sub_title_01: `4rem`,
    sub_title_02: `3.6rem`,
    sub_title_03: `3.2rem`,
    body_01: `2rem`,
    body_02: `1.6rem`,
};

const font_size_medium = {
    title_01: `6.4rem`,
    title_02: `4.8rem`,
    title_03: `4rem`,
    sub_title_01: `3.6rem`,
    sub_title_02: `3.2rem`,
    sub_title_03: `2rem`,
    body_01: `1.6rem`,
    body_02: `1.4rem`,
};

const font_size_small = {
    title_01: `4.8rem`,
    title_02: `4rem`,
    title_03: `3.6rem`,
    sub_title_01: `3.2rem`,
    sub_title_02: `2rem`,
    sub_title_03: `1.6rem`,
    body_01: `1.4rem`,
    body_02: `1.2rem`,
};

const font_size = {
    large: font_size_large,
    medium: font_size_medium,
    small: font_size_small,
};

const font_weight = {
    light: 300,
    regular: 400,
    medium: 500,
};

const breakpoint = {
    small: 600,
    medium: 900,
    large: 1200,
};

const media_query = {
    small: `(max-width: ${breakpoint.small}px)`,
    medium: `(max-width: ${breakpoint.medium}px)`,
    large: `(max-width: ${breakpoint.large}px)`,
};

export type FontWeightType = typeof font_weight;
export type FontSizeType = typeof font_size.large;
export type ColorType = typeof color;
export type MediaQueryType = typeof media_query;

const theme: DefaultTheme = {
    color: color,
    font_size: font_size,
    font_weight: font_weight,
    media_query: media_query,
};

export default theme;
