const SearchTask = () => {
  return (
    <div className="flex px-4 sm:justify-center">
      <input
        type="text"
        className="px-3 py-1.5 outline-none rounded-lg w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] text-center "
        placeholder="Search Task here.."
      />
    </div>
  );
};

export default SearchTask;
