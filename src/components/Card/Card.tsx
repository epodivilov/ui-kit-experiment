import { forwardRef } from 'react';
import type { ComponentProps } from 'react';
import { clsx } from 'clsx';
import type { CardProps } from './Card.types';
import {
  cardRecipe,
  cardMedia,
  cardContent,
  cardHeader,
  cardBody,
  cardFooter,
  cardTitle,
  cardSubtitle,
  cardLoadingOverlay,
} from './Card.css';

/**
 * Card Component
 *
 * A flexible card component for grouping content with theme support.
 * Supports different variants, sizes, media, and interactive states.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      size = 'medium',
      interactive = false,
      loading = false,
      disabled = false,
      header,
      footer,
      media,
      className,
      tabIndex,
      ...props
    },
    ref
  ) => {
    const hasMedia = !!media;

    // Set tabIndex for interactive cards
    const cardTabIndex = interactive && !disabled ? (tabIndex ?? 0) : tabIndex;

    return (
      <div
        ref={ref}
        className={clsx(
          cardRecipe({
            variant,
            size,
            interactive,
            hasMedia,
          }),
          className
        )}
        data-loading={loading}
        data-disabled={disabled}
        tabIndex={cardTabIndex}
        role={interactive ? 'button' : undefined}
        aria-disabled={disabled}
        {...props}
      >
        {/* Media section */}
        {media && (
          <div className={cardMedia}>
            {media}
          </div>
        )}

        {/* Content wrapper */}
        <div className={cardContent({ size, hasMedia })}>
          {/* Header section */}
          {header && (
            <div className={cardHeader}>
              {header}
            </div>
          )}

          {/* Main content */}
          <div className={cardBody}>
            {children}
          </div>

          {/* Footer section */}
          {footer && (
            <div className={cardFooter}>
              {footer}
            </div>
          )}
        </div>

        {/* Loading overlay */}
        {loading && (
          <div className={cardLoadingOverlay} aria-label="Loading..." />
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * Card Title Component
 */
export const CardTitle = forwardRef<HTMLHeadingElement, ComponentProps<'h3'>>(
  ({ children, className, ...props }, ref) => (
    <h3 ref={ref} className={clsx(cardTitle, className)} {...props}>
      {children}
    </h3>
  )
);

CardTitle.displayName = 'CardTitle';

/**
 * Card Subtitle Component
 */
export const CardSubtitle = forwardRef<HTMLParagraphElement, ComponentProps<'p'>>(
  ({ children, className, ...props }, ref) => (
    <p ref={ref} className={clsx(cardSubtitle, className)} {...props}>
      {children}
    </p>
  )
);

CardSubtitle.displayName = 'CardSubtitle';