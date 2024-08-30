import { useState } from "react";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState({
    todo: [
      {
        id: 1,
        title: "Task 1",
        description:
          "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.",
      },
      { id: 2, title: "Task 2", description: "Description" },
    ],
    inProgress: [{ id: 3, title: "Task 3", description: "Description" }],
    peerReview: [{ id: 4, title: "Task 4", description: "Description" }],
    done: [{ id: 5, title: "Task 5", description: "Description" }],
  });

  const addTask = (title, description) => {
    const newTask = {
      id: tasks.todo.length + 1,
      title,
      description,
    };
    setTasks((prevTasks) => ({
      ...prevTasks,
      todo: [...prevTasks.todo, newTask],
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-center">
      <div className="border-r-2 border-zinc-500 pr-3">
        <h2 className="text-xl font-semibold text-red-800 bg-red-100 mb-2 p-4 rounded-lg">
          To Do
        </h2>
        {tasks.todo.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
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
          />
        ))}
      </div>
      <AddTask addTask={addTask} />
    </div>
  );
};

export default KanbanBoard;
