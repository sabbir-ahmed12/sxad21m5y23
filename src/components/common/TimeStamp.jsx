import { FaRegCalendarAlt } from "react-icons/fa";

const TimeStamp = ({ date }) => {
  return (
    <div className="text-custom">
      <FaRegCalendarAlt className="me-2" size={20} />
      <time className="font-monospace">{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}</time>
    </div>
  );
};

export default TimeStamp;
