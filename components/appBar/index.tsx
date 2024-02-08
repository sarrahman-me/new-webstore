import { AiOutlineLike, AiOutlineSearch } from "react-icons/ai";
import { IoLogoGoogle } from "react-icons/io";

const AppBar = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1 md:space-x-2">
          <IoLogoGoogle className="text-lg md:text-2xl" />
          <p className="font-bold md:text-lg">Tester Webstore Mitra</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative hidden md:flex">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              placeholder="Cari Sesuatu ..."
              className="pl-10 p-1 rounded-md border-2 focus:ring-slate-200 focus:border-slate-200 outline-none sm:min-w-96"
            />
          </div>
          <div className="border rounded-md bg-slate-50 flex items-center p-1 space-x-1">
            <AiOutlineLike className="text-xl md:text-2xl" />
            <span>0</span>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            placeholder="Cari Sesuatu ..."
            className="pl-10 p-1.5 rounded-md border-2 focus:ring-slate-200 focus:border-slate-200 outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
