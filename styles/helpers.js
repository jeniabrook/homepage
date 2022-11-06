export const typography = {
  fontPrimary: 'Rubik, system-ui, Arial, sans-serif',
};

export const colors = {
  black: 'var(--black)',
  gray: 'var(--gray)',
  grayDark: 'var(--gray-dark)',
  indigo: 'var(--indigo)',
  light: 'var(--light)',
  pink: 'var(--pink)',
  salmon: 'var(--salmon)',
  white: 'var(--white)',
  yellow: 'var(--yellow)',
};

export const breakpointsPx = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const mediaQuery = {
  sm: `@media screen and (min-width: ${breakpointsPx.sm})`,
  md: `@media screen and (min-width: ${breakpointsPx.md})`,
  lg: `@media screen and (min-width: ${breakpointsPx.lg})`,
  xl: `@media screen and (min-width: ${breakpointsPx.xl})`,
};
