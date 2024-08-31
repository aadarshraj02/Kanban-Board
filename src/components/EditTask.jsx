import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/slices/taskSlice";

const EditTask = ({ task, column, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(
      editTask({
        column,
        id: task.id,
        title,
        description,
      })
    );
    onCancel();
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-zinc-700 p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl text-white font-semibold mb-4">Edit Task</h2>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded outline-none"
          />
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded h-24 outline-none"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={onCancel}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
