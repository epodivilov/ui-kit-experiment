import { recipe } from '@vanilla-extract/recipes';
import { style, keyframes, globalStyle } from '@vanilla-extract/css';
import { themeContract } from '../../themes/contracts/theme.css';

/**
 * Loading pulse animation
 */
const pulseKeyframes = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.7 },
});

/**
 * Card recipe with theme integration
 */
export const cardRecipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: themeContract.border.radius.lg,
    backgroundColor: themeContract.color.semantic.surface.default,
    border: `${themeContract.border.width.default} solid ${themeContract.color.semantic.border.default}`,
    fontFamily: themeContract.typography.fontFamily.sans,
    transition: 'all 0.15s ease-in-out',
    position: 'relative',
    overflow: 'hidden',

    selectors: {
      '&:where([data-loading="true"])': {
        animation: `${pulseKeyframes} 2s ease-in-out infinite`,
      },
      '&:where([data-disabled="true"])': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    variant: {
      default: {
        border: `${themeContract.border.width.default} solid ${themeContract.color.semantic.border.default}`,
        boxShadow: 'none',
      },
      elevated: {
        border: 'none',
        boxShadow: themeContract.shadow.md,

        selectors: {
          '&:hover:not([data-disabled="true"])': {
            boxShadow: themeContract.shadow.lg,
          },
        },
      },
      outlined: {
        border: `${themeContract.border.width[2]} solid ${themeContract.color.semantic.border.emphasis}`,
        boxShadow: 'none',
      },
      filled: {
        backgroundColor: themeContract.color.semantic.surface.muted,
        border: 'none',
        boxShadow: 'none',
      },
    },

    size: {
      small: {
        padding: themeContract.spacing[3],
        gap: themeContract.spacing[2],
      },
      medium: {
        padding: themeContract.spacing[4],
        gap: themeContract.spacing[3],
      },
      large: {
        padding: themeContract.spacing[6],
        gap: themeContract.spacing[4],
      },
    },

    interactive: {
      true: {
        cursor: 'pointer',
        userSelect: 'none',

        ':hover:not([data-disabled="true"])': {
          backgroundColor: themeContract.color.semantic.surface.subtle,
          transform: 'translateY(-1px)',
        },

        ':active:not([data-disabled="true"])': {
          transform: 'translateY(0)',
        },

        ':focus-visible': {
          outline: `2px solid ${themeContract.color.semantic.border.accent}`,
          outlineOffset: '2px',
        },
      },
    },

    hasMedia: {
      true: {
        padding: 0,
      },
    },
  },

  compoundVariants: [
    // Cards with media need special padding handling
    {
      variants: { hasMedia: true, size: 'small' },
      style: {
        gap: 0,
      },
    },
    {
      variants: { hasMedia: true, size: 'medium' },
      style: {
        gap: 0,
      },
    },
    {
      variants: { hasMedia: true, size: 'large' },
      style: {
        gap: 0,
      },
    },
  ],

  defaultVariants: {
    variant: 'default',
    size: 'medium',
    interactive: false,
    hasMedia: false,
  },
});

/**
 * Card media container
 */
export const cardMedia = style({
  width: '100%',
  overflow: 'hidden',
  borderTopLeftRadius: themeContract.border.radius.lg,
  borderTopRightRadius: themeContract.border.radius.lg,
});

// Global styles for media elements inside card media
globalStyle(`${cardMedia} img`, {
  width: '100%',
  height: 'auto',
  display: 'block',
});

globalStyle(`${cardMedia} video`, {
  width: '100%',
  height: 'auto',
  display: 'block',
});

/**
 * Card content wrapper
 */
export const cardContent = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },

  variants: {
    size: {
      small: {
        padding: themeContract.spacing[3],
        gap: themeContract.spacing[2],
      },
      medium: {
        padding: themeContract.spacing[4],
        gap: themeContract.spacing[3],
      },
      large: {
        padding: themeContract.spacing[6],
        gap: themeContract.spacing[4],
      },
    },

    hasMedia: {
      true: {},
      false: {
        padding: 0,
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    hasMedia: false,
  },
});

/**
 * Card header styles
 */
export const cardHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeContract.spacing[1],
});

/**
 * Card body styles
 */
export const cardBody = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeContract.spacing[2],
  flex: 1,
  color: themeContract.color.semantic.text.default,
  fontSize: themeContract.typography.fontSize.base,
  lineHeight: themeContract.typography.lineHeight.normal,
});

/**
 * Card footer styles
 */
export const cardFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 'auto',
  paddingTop: themeContract.spacing[2],
  borderTop: `${themeContract.border.width.default} solid ${themeContract.color.semantic.border.subtle}`,
});

/**
 * Card title styles
 */
export const cardTitle = style({
  fontSize: themeContract.typography.fontSize.lg,
  fontWeight: themeContract.typography.fontWeight.semibold,
  color: themeContract.color.semantic.text.default,
  lineHeight: themeContract.typography.lineHeight.tight,
  margin: 0,
});

/**
 * Card subtitle styles
 */
export const cardSubtitle = style({
  fontSize: themeContract.typography.fontSize.sm,
  color: themeContract.color.semantic.text.muted,
  lineHeight: themeContract.typography.lineHeight.normal,
  margin: 0,
});

/**
 * Loading overlay for card
 */
export const cardLoadingOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,

  '::after': {
    content: '',
    width: '24px',
    height: '24px',
    border: `2px solid ${themeContract.color.semantic.border.muted}`,
    borderTopColor: themeContract.color.semantic.border.accent,
    borderRadius: '50%',
    animation: `${pulseKeyframes} 1s linear infinite`,
  },
});