import { BorderProps } from "./props/border";
import { ColorProps } from "./props/color";
import { FlexboxProps } from "./props/flexbox";
import { GridLayoutProps } from "./props/grid";
import { InteractivityProps } from "./props/interactivity";
import { LayoutProps } from "./props/layout";
import { MarginProps } from "./props/margin";
import { PaddingProps } from "./props/padding";
import { ResponsiveProps } from "./types";

export type StyleProps = ResponsiveProps<
    BorderProps &
        ColorProps &
        FlexboxProps &
        GridLayoutProps &
        InteractivityProps &
        LayoutProps &
        MarginProps &
        PaddingProps &
        PositionProps &
>;