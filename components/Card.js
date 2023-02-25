import clsx from 'clsx';

function Card({ children, className }) {
  return (
    <div className={clsx('p-7 bg-white rounded-2xl shadow-lg', className)}>
      {children}
    </div>
  );
}

export default Card;
