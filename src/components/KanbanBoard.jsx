import TaskCard from "./TaskCard";
import AddTask from "./AddTask";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  deleteTask,
  searchTasks,
  clearFilter,
  moveTask,
} from "../redux/slices/taskSlice";
import SearchTask from "./SearchTask";
import { useDrop } from "react-dnd";

const KanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks);
  const filteredTasks = useSelector((state) => state.tasks.filteredTasks);
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

  const handleSearch = (searchText) => {
    if (searchText) {
      dispatch(searchTasks(searchText));
    } else {
      dispatch(clearFilter());
    }
  };

  const renderTasks = (column) => {
    const tasksToRender = filteredTasks?.[column] || tasks[column];
    return tasksToRender.map((task) => (
      <TaskCard
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        column={column}
        onDelete={() => handleDeleteTask(column, task.id)}
      />
    ));
  };

  const handleDrop = (item, newColumn) => {
    dispatch(
      moveTask({ id: item.id, fromColumn: item.column, toColumn: newColumn })
    );
  };

  const [, dropToDo] = useDrop({
    accept: "TASK",
    drop: (item) => handleDrop(item, "todo"),
  });

  const [, dropInProgress] = useDrop({
    accept: "TASK",
    drop: (item) => handleDrop(item, "inProgress"),
  });

  const [, dropPeerReview] = useDrop({
    accept: "TASK",
    drop: (item) => handleDrop(item, "peerReview"),
  });

  const [, dropDone] = useDrop({
    accept: "TASK",
    drop: (item) => handleDrop(item, "done"),
  });

  return (
    <div className="p-4">
      <SearchTask onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-center h-[90vh]">
        <div ref={dropToDo} className="border-r-2 border-zinc-500 pr-3">
          <h2 className="text-xl font-semibold text-red-800 bg-red-100 mb-2 p-4 rounded-lg">
            To Do
          </h2>
          {renderTasks("todo")}
        </div>
        <div ref={dropInProgress} className="border-r-2 border-zinc-500 pr-3">
          <h2 className="text-xl font-semibold text-blue-800 mb-2 bg-blue-100 p-4 rounded-lg">
            In Progress
          </h2>
          {renderTasks("inProgress")}
        </div>
        <div ref={dropPeerReview} className="border-r-2 border-zinc-500 pr-3">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2 bg-yellow-100 p-4 rounded-lg">
            Peer Review
          </h2>
          {renderTasks("peerReview")}
        </div>
        <div ref={dropDone} className="pr-2">
          <h2 className="text-xl font-semibold text-green-800 mb-2 bg-green-100 p-4 rounded-lg">
            Done
          </h2>
          {renderTasks("done")}
        </div>
        <AddTask addTask={handleAddTask} />
      </div>
    </div>
  );
};

export default KanbanBoard;
