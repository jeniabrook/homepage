import Card from '../../../Card';
import Briefcase from '../../../Icons/Briefcase';

function Work({ children, lastItem = false }) {
  return (
    <div className="relative flex items-start gap-x-4 mb-10 last-of-type:mb-0 ">
      {!lastItem && (
        <span className="hidden absolute w-[1px] h-full bg-pink top-[2.55rem] left-[1.3rem] md:block" />
      )}
      <div className="hidden p-2 border border-solid border-pink rounded-full md:block">
        <Briefcase className="block stroke-pink" />
      </div>
      <Card className="flex-grow">{children}</Card>
    </div>
  );
}

export default Work;
