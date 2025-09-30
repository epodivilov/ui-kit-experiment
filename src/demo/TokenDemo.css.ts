import { style } from '@vanilla-extract/css';

export const demoContainer = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem',
  fontFamily: 'Inter, system-ui, sans-serif',
});

export const demoSection = style({
  marginBottom: '3rem',
});

export const demoTitle = style({
  fontSize: '1.5rem',
  fontWeight: '600',
  marginBottom: '1.5rem',
  color: '#171717',
});

export const demoGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem',
});

export const demoCard = style({
  padding: '1.5rem',
  backgroundColor: 'white',
  border: '1px solid #e5e5e5',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  selectors: {
    '& h3': {
      margin: 0,
      fontSize: '1rem',
      fontWeight: '600',
      color: '#404040',
    },
  },
});
