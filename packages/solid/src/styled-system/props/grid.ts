import { Property } from "csstype";

/**
 * Types for CSS grid properties.
 */
export type GridLayoutProps = Partial<{
    /**
     * The CSS `grid-template` property.
     * 
     * It is a shorthand property for defining grid columns, rows, and areas.
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)
     */
    gridTemplate: Property.GridTemplate;

    /**
     * 
     */

}>;