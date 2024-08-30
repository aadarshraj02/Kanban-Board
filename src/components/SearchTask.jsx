import { useState } from "react";

const SearchTask = ({ onSearch }) => {
  const [searchTasks, setSearchTasks] = useState("");

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTasks(searchText);
    onSearch(searchText);
  };

  return (
    <div className="flex px-4 sm:justify-center">
      <input
        type="text"
        className="px-3 py-1.5 outline-none rounded-lg w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] text-center "
        placeholder="Search Task here.."
        value={searchTasks}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchTask;
