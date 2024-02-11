"use client";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { Footer } from "..";

const FilterProducts = () => {
  const [openFilter, setOpen] = useState<boolean>(false);

  return (
    <div>
      <span
        onClick={() => setOpen(!openFilter)}
        className="select-none inline-flex p-1 px-2 bg-slate-500 text-white space-x-2 items-center border rounded-md cursor-pointer"
      >
        <CiFilter />
        <p>Filter</p>
      </span>

      {
        <div
          className={`bg-white bg-opacity-95 fixed top-0 right-0 z-50 h-screen transition duration-700 ease-in-out  ${
            openFilter ? "w-full md:w-72 p-4 md:p-7" : "hidden w-0"
          }`}
        >
          {/* header */}
          <div className="flex justify-between items-center">
            <p className="font-semibold">Filter Barang</p>
            <GrClose
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          </div>

          {/* filter 1  */}
          <div className="my-2">
            <p>Filter apa aja ya belum tau</p>
          </div>

          {/* tombol aksi */}
          <div className="flex justify-evenly items-center my-3">
            <button className="border p-1 px-2 rounded-md">Reset</button>
            <button className="border p-1 px-2 rounded-md bg-slate-500 text-white">
              Terapkan
            </button>
          </div>
          <Footer />
        </div>
      }
    </div>
  );
};

export default FilterProducts;
