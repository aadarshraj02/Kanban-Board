const EditTask = () => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-zinc-700 p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl text-white font-semibold mb-4">
            Add New Task
          </h2>
          <input
            type="text"
            placeholder="Task Title"
            className="w-full p-2 mb-4 border border-gray-300 rounded outline-none"
          />
          <textarea
            placeholder="Task Description"
            className="w-full p-2 mb-4 border border-gray-300 rounded h-24 outline-none"
          />
          <div className="flex justify-end gap-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancel
            </button>
            <button
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
