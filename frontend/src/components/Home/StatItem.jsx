// components/ui/StatItem.tsx
import PropTypes from 'prop-types';

const StatItem = ({ icon: IconComponent, label }) => {
  return (
    <div className="flex items-center gap-2 justify-center md:justify-start">
      <IconComponent size={24} className="text-green-500" />
      <span className="text-gray-800">{label}</span>
    </div>
  );
};

StatItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default StatItem;