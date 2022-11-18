import { css } from '@emotion/react';
import { colors, mediaQuery } from '../../../../styles/helpers';
import Card from '../../../Card';
import Briefcase from '../../../Icons/Briefcase';

const workExperienceCss = css`
  position: relative;
  display: flex;
  align-items: flex-start;
  column-gap: 16px;

  :not(:last-of-type) {
    margin-bottom: 38px;
  }

  :not(:last-of-type)::before {
    display: none;
    position: absolute;
    content: ' ';
    width: 1px;
    height: 100%;
    background-color: ${colors.pink};
    top: 38px;
    left: 19px;

    ${mediaQuery.md} {
      display: initial;
    }
  }
`;

const iconWrapperCss = css`
  display: none;
  padding: 6px;
  border: 1px solid ${colors.pink};
  border-radius: 50%;

  > svg {
    display: block;
    stroke: ${colors.pink};
  }

  ${mediaQuery.md} {
    display: initial;
  }
`;

const cardCss = css`
  flex-grow: 1;
`;

function Work({ children }) {
  return (
    <div css={workExperienceCss}>
      <div css={iconWrapperCss}>
        <Briefcase />
      </div>
      <Card css={cardCss}>{children}</Card>
    </div>
  );
}

export default Work;
