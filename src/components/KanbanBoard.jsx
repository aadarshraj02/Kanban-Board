import TaskCard from "./TaskCard";
import AddTask from "./AddTask";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../redux/slices/taskSlice";
import SearchTask from "./SearchTask";

const KanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (title, description) => {
    const newTask = {
      id: tasks.todo.length + 1,
      title,
      description,
    };
    dispatch(addTask({ column: "todo", task: newTask }));
  };

  const handleDeleteTask = (column, id) => {
    dispatch(deleteTask({ column, id }));
  };

  return (
    <div className="p-4">
      <SearchTask />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-center h-[90vh]">
        <div className="border-r-2 border-zinc-500 pr-3">
          <h2 className="text-xl font-semibold text-red-800 bg-red-100 mb-2 p-4 rounded-lg">
            To Do
          </h2>
          {tasks.todo.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              onDelete={() => handleDeleteTask("todo", task.id)}
            />
          ))}
        </div>
        <div className="border-r-2 border-zinc-500 pr-3">
          <h2 className="text-xl font-semibold text-blue-800 mb-2 bg-blue-100 p-4 rounded-lg">
            In Progress
          </h2>
          {tasks.inProgress.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              onDelete={() => handleDeleteTask("inProgress", task.id)}
            />
          ))}
        </div>
        <div className="border-r-2 border-zinc-500 pr-3">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2 bg-yellow-100 p-4 rounded-lg">
            Peer Review
          </h2>
          {tasks.peerReview.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              onDelete={() => handleDeleteTask("peerReview", task.id)}
            />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-green-800 mb-2 bg-green-100 p-4 rounded-lg">
            Done
          </h2>
          {tasks.done.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              onDelete={() => handleDeleteTask("done", task.id)}
            />
          ))}
        </div>
        <AddTask addTask={handleAddTask} />
      </div>
    </div>
  );
};

export default KanbanBoard;
