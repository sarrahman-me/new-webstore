import { AiOutlineLike, AiOutlineSearch } from "react-icons/ai";
import { IoLogoGoogle } from "react-icons/io";
import { ToggleDarkMode } from "..";

const AppBar = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 z-50 bg-slate-200 dark:bg-slate-900 p-2 md:p-4">
      <LogoCompany />
      <div className="flex items-center space-x-2">
        <Searchbox />
        <LikeIcon />
        <ToggleDarkMode />
      </div>
    </div>
  );
};

export default AppBar;

const LogoCompany = () => {
  return (
    <div className="flex items-center space-x-1 md:space-x-2">
      <IoLogoGoogle className="text-lg md:text-2xl" />
      <p className="font-bold md:text-lg">Tester Webstore Mitra</p>
    </div>
  );
};

const Searchbox = () => {
  return (
    <div className="relative hidden md:flex">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <AiOutlineSearch />
      </span>
      <input
        type="text"
        placeholder="Cari Sesuatu ..."
        className="pl-10 p-1 bg-white border-slate-600 dark:bg-slate-700 rounded-md border-2 focus:ring-slate-500 focus:border-slate-500 outline-none sm:min-w-96"
      />
    </div>
  );
};

const LikeIcon = () => {
  return (
    <div className="border border-slate-500 rounded-md bg-slate-50 dark:bg-slate-700 flex items-center p-1 space-x-1">
      <AiOutlineLike className="text-xl md:text-2xl" />
      <span>0</span>
    </div>
  );
};
