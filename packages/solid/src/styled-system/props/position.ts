import { Property } from "csstype";

import { KeysOf,SpaceScaleValue,ZIndiceScaleValue } from "../types";

/**
 * Types for position CSS properties.
 */
export type PositionProps = Partial<{
    /**
     * The CSS `position` property.
     */
    position: Property.Position;
}>;