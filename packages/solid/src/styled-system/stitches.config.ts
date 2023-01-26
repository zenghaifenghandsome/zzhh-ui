import {createStitches,defaultThemeMap} from "@stitches/core"

import { baseMedia } from "./media";
import { baseThemeTokens } from "./tokens";


export const {
    theme:baseTheme,
    css,
    globalCss,
    config,
    createTheme,
    getCssText,
    keyframes,
} = createStitches({
    prefix:"zzhh",
    themeMap:{
        ...defaultThemeMap,
        borderWidth:"sizes",
        borderTopWidth:"sizes",
        borderRightWidth:"sizes",
        borderBottomWidth:"sizes",
        borderLeftWidth:"sizes",
        strokeWidth:"sizes",
    },
    theme:baseThemeTokens,
    media: baseMedia,
    utils,
});