import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="md:hidden my-2">
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          placeholder="Cari Sesuatu ..."
          className="pl-10 p-1.5 rounded-md border border-slate-600 bg-white dark:bg-slate-700 focus:ring-slate-500 focus:border-slate-500 outline-none w-full"
        />
      </div>
    </div>
  );
};

export default SearchBar;
