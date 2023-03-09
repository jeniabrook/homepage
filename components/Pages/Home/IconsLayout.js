import clsx from 'clsx';
import AtSign from '../../Icons/AtSign';
import Code from '../../Icons/Code';
import Command from '../../Icons/Command';
import Crop from '../../Icons/Crop';
import Hash from '../../Icons/Hash';
import Zap from '../../Icons/Zap';

const icons = [
  {
    id: 1,
    icon: AtSign,
    style: 'top-[10%] left-[10%] rotate-[25deg] stroke-indigo',
  },
  {
    id: 2,
    icon: Code,
    style: 'top-[25%] left-[30%] rotate-[-25deg] stroke-pink',
  },
  {
    id: 3,
    icon: Command,
    style: 'left-[15%] bottom-[30%] rotate-[25deg] stroke-teal hidden sm:block',
  },
  {
    id: 4,
    icon: Crop,
    style: 'left-[10%] bottom-[10%]  stroke-salmon',
  },
  {
    id: 5,
    icon: Hash,
    style: 'left-[45%] top-[5%] rotate-[5deg] stroke-yellow',
  },
  {
    id: 6,
    icon: Zap,
    style: 'left-[40%] bottom-[5%] rotate-[-15deg] stroke-orange',
  },
  {
    id: 7,
    icon: AtSign,
    style: 'top-[20%] right-[30%] rotate-[-25deg] stroke-salmon',
  },
  {
    id: 8,
    icon: Code,
    style: 'right-[30%] bottom-[20%] rotate-[25deg] stroke-pink',
  },
  {
    id: 9,
    icon: Command,
    style: 'right-[10%] top-[10%] rotate-[-25deg] stroke-orange',
  },
  {
    id: 10,
    icon: Crop,
    style: 'right-[20%] top-[45%] rotate-[90deg] stroke-indigo',
  },
  {
    id: 11,
    icon: Hash,
    style: 'right-[10%] bottom-[10%] rotate-[-5deg] stroke-yellow',
  },
  {
    id: 12,
    icon: Zap,
    style: 'right-[10%] top-[60%] rotate-[15deg] stroke-teal hidden sm:block',
  },
];

function IconsLayout() {
  return (
    <>
      {icons.map(({ id, icon, style }) => {
        const Icon = icon;
        return <Icon key={id} className={clsx('absolute', style)} />;
      })}
    </>
  );
}

export default IconsLayout;
