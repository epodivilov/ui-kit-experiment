/**
 * Token Helpers
 *
 * Utility functions for working with design tokens in components.
 */

/**
 * Shadow object type from TokenStudio format
 */
export interface ShadowToken {
  x: string;
  y: string;
  blur: string;
  spread: string;
  color: string;
  type: string;
}

/**
 * Convert shadow token(s) to CSS box-shadow string
 *
 * @param shadow - Single shadow object or array of shadow objects
 * @returns CSS box-shadow string
 *
 * @example
 * ```ts
 * import { shadowToString } from './tokens/helpers';
 * import { PrimitivesShadow3 } from './tokens/generated/js/primitives';
 *
 * const shadowCSS = shadowToString(PrimitivesShadow3);
 * // "0px 4px 8px 0px #171717, 0px 2px 4px 0px #171717"
 * ```
 */
export function shadowToString(shadow: ShadowToken | ShadowToken[]): string {
  // Handle single shadow
  if (!Array.isArray(shadow)) {
    const { x, y, blur, spread, color } = shadow;
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
  }

  // Handle array of shadows
  return shadow.map(s => {
    const { x, y, blur, spread, color } = s;
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
  }).join(', ');
}
