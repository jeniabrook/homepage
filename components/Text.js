import { css } from '@emotion/react';

const textCss = props => css`
  margin-top: 0;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-variation-settings: 'wght' 350;

  ${props.isFlushMargin &&
  css`
    margin-bottom: 0;
  `}

  ${props.size === 'lg' &&
  css`
    font-size: 1.125rem;
  `}
`;

function Text({
  as: component,
  children,
  className,
  isFlushMargin,
  size = 'md',
}) {
  const Component = component ?? 'p';

  return (
    <Component css={textCss({ isFlushMargin, size })} className={className}>
      {children}
    </Component>
  );
}

export default Text;
