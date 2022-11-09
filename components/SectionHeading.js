import { css } from '@emotion/react';
import { colors } from '../styles/helpers';
import Heading from './Heading';
import ChevronRight from './Icons/ChevronRight';

const sectionHeadingCss = css`
  display: flex;
  align-items: center;

  > svg {
    width: 30px;
    height: 30px;
  }
`;

const accentColorCss = {
  indigo: css`
    > svg {
      stroke: ${colors.indigo};
    }

    > span {
      color: ${colors.indigo};
    }
  `,
};

function SectionHeading({ accentColor, children }) {
  return (
    <Heading css={[sectionHeadingCss, accentColorCss[accentColor]]} as="h2">
      <ChevronRight />
      {children}
      <span>.</span>
    </Heading>
  );
}

export default SectionHeading;
