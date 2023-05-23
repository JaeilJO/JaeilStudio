import 'styled-components';
import { ColorType, FontSizeType, FontWeightType, MediaQueryType } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: ColorType;
        font_weight: FontWeightType;
        font_size: {
            large: FontSizeType;
            medium: FontSizeType;
            small: FontSizeType;
        };
        media_query: MediaQueryType;
    }
}
