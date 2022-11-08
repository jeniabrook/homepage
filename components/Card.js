import { css } from '@emotion/react';
import { colors } from '../styles/helpers';

const cardCss = css`
  padding: 1.875rem;
  background-color: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 5px 20px 0 rgb(69 67 96 / 10%);
`;

function Card({ children, className, color }) {
  return (
    <div css={cardCss} className={className}>
      {children}
    </div>
  );
}

export default Card;
