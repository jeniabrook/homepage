import clsx from 'clsx';

function Container({ children, className }) {
  return (
    <div
      className={clsx(
        'w-full px-4 my-0 mx-auto sm:max-w-[540px] md:max-w-[920px] xl:max-w-[1200px]',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
