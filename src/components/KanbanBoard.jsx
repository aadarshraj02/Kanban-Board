import TaskCard from "./TaskCard";

const KanbanBoard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-center">
      <div className="bg-red-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-red-800 mb-4">To Do</h2>
        <TaskCard />
      </div>
      <div className="bg-blue-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          In Progress
        </h2>
        <TaskCard />
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-yellow-800 mb-4">
          Peer Review
        </h2>
        <TaskCard />
      </div>
      <div className="bg-green-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-green-800 mb-4">Done</h2>
        <TaskCard />
      </div>
    </div>
  );
};

export default KanbanBoard;
