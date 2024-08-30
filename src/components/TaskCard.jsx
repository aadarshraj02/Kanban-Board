import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import { useDrag } from "react-dnd";

const TaskCard = ({ title, description, id, onDelete, column }) => {
  const shortenedDescription =
    description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id, column },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`bg-zinc-900 p-4 rounded-lg shadow-md mb-4 w-full h-36 flex flex-col gap-[6px] relative cursor-grab ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <h3 className="text-lg font-semibold text-white">{title.toUpperCase()}</h3>
      <p className="text-sm text-gray-400 mb-3 overflow-hidden">
        {shortenedDescription}
      </p>
      <div className="flex justify-between items-center absolute bottom-5 w-full px-4">
        <MdOutlineEditNote className="text-2xl absolute left-2 cursor-pointer text-blue-500 hover:scale-125 transition-all duration-300 ease-linear" />
        <MdDelete
          onClick={() => onDelete(id)}
          className="text-2xl absolute right-8 text-red-500 hover:scale-125 transition-all duration-300 ease-linear cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TaskCard;
