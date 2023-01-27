import { Property } from "csstype";
import { JSX } from "solid-js";
import { SpaceScaleValue, SystemStyleObject } from "../../styled-system/types";
import {ButtonVariants} from "./button.styles"
export interface ButtonOptions extends ButtonVariants{
    /**
     * If `true`, the button will be disabled.
     */
    disabled?: boolean;

    /**
     * The label to show in the button when `loading` is true.
     * If no text is passed, it only shows the loader.
     */
    loadingText?: string;

    /**
     * Replace the loader component when `loading` is set to `true`.
     */
    loader?: JSX.Element;

    /**
     * It determines the placement of the loader when isLoading is true.
     */
    loaderPlacement?: "start"| "end";

    /**
     * The space between the button icon and label.
     */
    iconSpacing?: Property.MarginRight<SpaceScaleValue>;

    /**
     * If added, the button will show an icon before the button's label.
     */
    leftIcon?: JSX.Element;

    /**
     * If added, the button will show an icon after the button's label.
     */
    rightIcon?: JSX.Element;
};

export type ThemeableButtonOptions = Pick<
    ButtonOptions,
    "variant" | "colorScheme" | "size" | "loaderPlacement"
>;

export interface ButtonStyleConfig{
    baseStyle?:{
        root?: SystemStyleObject;
        group?: SystemStyleObject;
    };
    defaultProps?:{
        root?: ThemeableButtonOptions;
        group?: ThemeableButtonGrouptions;
    };
}