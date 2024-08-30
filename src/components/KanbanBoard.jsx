import TaskCard from "./TaskCard";

const KanbanBoard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-center">
      <div className="border-r-2 border-zinc-500 pr-3">
        <h2 className="text-xl font-semibold text-red-800 bg-red-100 mb-2 p-4 rounded-lg">
          To Do
        </h2>
        <TaskCard />
      </div>
      <div className="border-r-2 border-zinc-500 pr-3">
        <h2 className="text-xl font-semibold text-blue-800 mb-2 bg-blue-100 p-4 rounded-lg">
          In Progress
        </h2>
        <TaskCard />
      </div>
      <div className="border-r-2 border-zinc-500 pr-3">
        <h2 className="text-xl font-semibold text-yellow-800 mb-2 bg-yellow-100 p-4 rounded-lg">
          Peer Review
        </h2>
        <TaskCard />
      </div>
      <div className="">
        <h2 className="text-xl font-semibold text-green-800 mb-2 bg-green-100 p-4 rounded-lg">
          Done
        </h2>
        <TaskCard />
      </div>
    </div>
  );
};

export default KanbanBoard;
