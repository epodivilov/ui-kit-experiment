import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeContract } from '../../themes/contracts/theme.css';

/**
 * Tooltip popup recipe
 */
export const tooltipPopup = recipe({
  base: {
    backgroundColor: themeContract.color.semantic.surface.emphasis,
    color: themeContract.color.semantic.text.inverse,
    borderRadius: themeContract.border.radius.md,
    fontFamily: themeContract.typography.fontFamily.sans,
    fontWeight: themeContract.typography.fontWeight.medium,
    lineHeight: themeContract.typography.lineHeight.tight,
    boxShadow: themeContract.shadow.lg,
    zIndex: 1000,
    wordWrap: 'break-word',
    hyphens: 'auto',

    // Smooth entrance/exit animations
    transform: 'scale(0.95)',
    opacity: 0,
    transition: 'all 0.15s ease-out',

    selectors: {
      '&[data-state="open"]': {
        transform: 'scale(1)',
        opacity: 1,
      },
      '&[data-state="closed"]': {
        transform: 'scale(0.95)',
        opacity: 0,
      },
    },
  },

  variants: {
    size: {
      small: {
        padding: `${themeContract.spacing[1]} ${themeContract.spacing[2]}`,
        fontSize: themeContract.typography.fontSize.xs,
        maxWidth: '200px',
      },
      medium: {
        padding: `${themeContract.spacing[2]} ${themeContract.spacing[3]}`,
        fontSize: themeContract.typography.fontSize.sm,
        maxWidth: '300px',
      },
      large: {
        padding: `${themeContract.spacing[3]} ${themeContract.spacing[4]}`,
        fontSize: themeContract.typography.fontSize.base,
        maxWidth: '400px',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

/**
 * Tooltip arrow styles
 */
export const tooltipArrow = style({
  fill: themeContract.color.semantic.surface.emphasis,
  position: 'absolute',
  width: '8px',
  height: '8px',

  selectors: {
    // Arrow positioning based on placement
    '[data-side="top"] &': {
      bottom: '-4px',
    },
    '[data-side="bottom"] &': {
      top: '-4px',
    },
    '[data-side="left"] &': {
      right: '-4px',
    },
    '[data-side="right"] &': {
      left: '-4px',
    },
  },
});

/**
 * Tooltip positioner styles
 */
export const tooltipPositioner = style({
  zIndex: 1000,
});