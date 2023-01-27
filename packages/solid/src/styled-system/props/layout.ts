import { Property } from "csstype";

import { KeysOf } from "../types";

/**
 * Types for layout related CSS properties.
 */
export type LayoutProps = Partial<{
    /**
     * The CSS `display` property.
     */
    display: Property.Display;
}>;