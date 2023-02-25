import Heading from '../../../Heading';
import Text from '../../../Text';

function Title({ companyName, timeRange }) {
  return (
    <div className="flex flex-col items-baseline mt-2 md:gap-x-3 md:flex-row">
      <Heading as="h3">{companyName}</Heading>
      <Text className="text-gray" size="sm" isFlushMargin>
        {timeRange}
      </Text>
    </div>
  );
}

export default Title;
