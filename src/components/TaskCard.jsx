const TaskCard = ({ title, description }) => {
  const shortenedDescription =
    description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-full h-32 flex flex-col gap-1">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 overflow-hidden">
        {shortenedDescription}
      </p>
    </div>
  );
};

export default TaskCard;
