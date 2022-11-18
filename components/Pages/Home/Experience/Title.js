import { css } from '@emotion/react';
import { colors, mediaQuery } from '../../../../styles/helpers';
import Heading from '../../../Heading';
import Text from '../../../Text';

const titleCss = css`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 8px;

  > p {
    color: ${colors.gray};
  }

  ${mediaQuery.md} {
    column-gap: 12px;
    flex-direction: row;
  }
`;

function Title({ companyName, timeRange }) {
  return (
    <div css={titleCss}>
      <Heading as="h3">{companyName}</Heading>
      <Text size="sm" isFlushMargin>
        {timeRange}
      </Text>
    </div>
  );
}

export default Title;
