import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (title.trim() && description.trim()) {
      addTask(title, description);
      setTitle("");
      setDescription("");
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        + Add Task
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
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
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleAddTask}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
