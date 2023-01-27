import { Property } from "csstype";

import { KeysOf,SpaceScaleValue } from "../types";

/**
 * Types for padding CSS properties.
 */
export type PaddingProps = Partial<{
    /**
     * The CSS `padding` property.
     */
    padding: Property.Padding<SpaceScaleValue> | number;
}>;