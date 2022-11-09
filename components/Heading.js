import { css } from '@emotion/react';
import { colors } from '../styles/helpers';

const headingCss = css`
  color: ${colors.black};
  margin-top: 0;
`;

const headingStyle = {
  h1: css`
    font-size: 2.25rem;
    font-variation-settings: 'wght' 480;
    margin-bottom: 0.875rem;
  `,
  h2: css`
    font-size: 1.875rem;
    font-variation-settings: 'wght' 480;
    margin-bottom: 1.5rem;
  `,
  h3: css`
    font-size: 1.25rem;
    font-variation-settings: 'wght' 480;
    margin-block: 0.625rem;
  `,
  h4: css`
    font-size: 1rem;
    font-variation-settings: 'wght' 400;
    margin-block: 1rem;
  `,
};

function Heading({ as: component, children, className }) {
  const Component = component ?? 'h1';

  return (
    <Component
      css={[headingCss, headingStyle[component]]}
      className={className}
    >
      {children}
    </Component>
  );
}

export default Heading;
