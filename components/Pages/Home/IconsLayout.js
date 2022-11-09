import { css } from '@emotion/react';
import { colors, mediaQuery } from '../../styles/helpers';
import AtSign from '../Icons/AtSign';
import Code from '../Icons/Code';
import Command from '../Icons/Command';
import Crop from '../Icons/Crop';
import Hash from '../Icons/Hash';
import Zap from '../Icons/Zap';

const iconCss = css`
  position: absolute;
`;

const icons = [
  {
    id: 1,
    icon: AtSign,
    style: css`
      top: 10%;
      left: 10%;
      transform: rotate(25deg);
      stroke: ${colors.indigo};
    `,
  },
  {
    id: 2,
    icon: Code,
    style: css`
      left: 25%;
      top: 30%;
      transform: rotate(-25deg);
      stroke: ${colors.pink};
    `,
  },
  {
    id: 3,
    icon: Command,
    style: css`
      left: 15%;
      bottom: 30%;
      transform: rotate(25deg);
      stroke: ${colors.teal};
      display: none;

      ${mediaQuery.sm} {
        display: initial;
      }
    `,
  },
  {
    id: 4,
    icon: Crop,
    style: css`
      left: 10%;
      bottom: 10%;
      stroke: ${colors.salmon};
    `,
  },
  {
    id: 5,
    icon: Hash,
    style: css`
      left: 45%;
      top: 5%;
      transform: rotate(5deg);
      stroke: ${colors.yellow};
    `,
  },
  {
    id: 6,
    icon: Zap,
    style: css`
      left: 40%;
      bottom: 5%;
      transform: rotate(-15deg);
      stroke: ${colors.orange};
    `,
  },
  {
    id: 7,
    icon: AtSign,
    style: css`
      top: 20%;
      right: 30%;
      transform: rotate(-25deg);
      stroke: ${colors.salmon};
    `,
  },
  {
    id: 8,
    icon: Code,
    style: css`
      right: 30%;
      bottom: 20%;
      transform: rotate(25deg);
      stroke: ${colors.pink};
    `,
  },
  {
    id: 9,
    icon: Command,
    style: css`
      right: 10%;
      top: 10%;
      transform: rotate(-25deg);
      stroke: ${colors.orange};
    `,
  },
  {
    id: 10,
    icon: Crop,
    style: css`
      top: 45%;
      right: 20%;
      transform: rotate(90deg);
      stroke: ${colors.indigo};
    `,
  },
  {
    id: 11,
    icon: Hash,
    style: css`
      bottom: 10%;
      right: 10%;
      transform: rotate(-5deg);
      stroke: ${colors.yellow};
    `,
  },
  {
    id: 12,
    icon: Zap,
    style: css`
      top: 60%;
      right: 10%;
      transform: rotate(15deg);
      stroke: ${colors.teal};
      display: none;

      ${mediaQuery.sm} {
        display: initial;
      }
    `,
  },
];

function IconsLayout() {
  return (
    <>
      {icons.map(({ id, icon, style }) => {
        const Icon = icon;
        return <Icon key={id} css={[iconCss, style]} />;
      })}
    </>
  );
}

export default IconsLayout;
