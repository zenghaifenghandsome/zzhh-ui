import {MarginProps} from "../../styled-system/props/margin"
import { ElementType } from "../types";
import { ButtonOptions } from "./button";

interface ButtonGroupOptions extends Pick<ButtonOptions, "variant" | "colorScheme" | "size">{
    /**
     * If `true`, the borderRadius of button that are direct children will be altered
     * to look flushed together.
     */
    attached?: boolean;

    /**
     * The spacing between each buttons.
     */
    spacing?: MarginProps["marginRight"];

    /**
     * If `true`, all wrapped button will be diabled.
     */
    disabled?: boolean;
};

export type ThemeableButtonGroupOptions = Omit<ButtonGroupOptions,"disabled">;

export type ButtonGroupProps<C extends ElementType = "div"> = Html