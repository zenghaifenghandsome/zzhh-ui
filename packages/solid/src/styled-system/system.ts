import { BorderProps } from "./props/border";
import { ColorProps } from "./props/color";
import { FlexboxProps } from "./props/flexbox";
import { ResponsiveProps } from "./types";

export type StyleProps = ResponsiveProps<
    BorderProps &
        ColorProps &
        FlexboxProps &
        GridLayoutProps &
>;