import { Component, ComponentProps, JSX } from "solid-js";

import { StyleProps } from "../styled-system/system";
import { SystemStyleObject } from "../styled-system/types";


/**
 * All HTML and SVG elements.
 */
export type DOMElements = keyof JSX.IntrinsicElements;

/**
 * Represent any HTML element or SolidJS component.
 */
export type ElementType<Props = any> = DOMElements | Component<Props>;

/**
 * Take the props of the passed HTML element or component and returns its type.
 */
export type PropsOf<C extends ElementType> = ComponentProps<C>;

/**
 * All SolidJS props that apply css classes.
 */
export interface ClassProps{
    class?: string;
    className?: string;
    classList?: {[key: string]:boolean};
};

/**
 * Tag or component that should be used as root element.
 */
export interface AsProp<C extends ElementType> {
    as?: C;
};

/**
 * Zzhh UI specific props.
 */
export type ZzhhProps = StyleProps & ClassProps & {__baseStyle?: SystemStyleObject};