import { css } from '@emotion/react';
import { colors } from '../../styles/helpers';
import Container from '../Container';
import Text from '../Text';
import GitHub from './icons/GitHub';
import Heart from './icons/Heart';

const footerCss = css`
  padding-block: 20px;
`;

const containerCss = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 8px;
`;

const thanksTextCss = css`
  display: flex;
  align-items: center;
  font-style: italic;
  column-gap: 8px;

  > svg {
    stroke: ${colors.pink};
    fill: ${colors.pink};
  }
`;

const githubTextCss = css`
  display: flex;
  align-items: center;
  font-style: italic;
  column-gap: 8px;

  > a > svg {
    display: block;
  }
`;

function Footer() {
  return (
    <footer css={footerCss}>
      <Container css={containerCss}>
        <Text css={thanksTextCss} isFlushMargin>
          Thank you for scrolling all this way. <Heart />
        </Text>
        <Text css={githubTextCss} isFlushMargin>
          Code available on
          <a
            href="https://github.com/jeniabrook/homepage"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHub />
          </a>
        </Text>
      </Container>
    </footer>
  );
}

export default Footer;