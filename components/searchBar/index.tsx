"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const handleSerch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/barang/pencarian?query=${query}`);
  };

  return (
    <div className="md:hidden my-2">
      <form onSubmit={handleSerch} className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          placeholder="Cari Sesuatu ..."
          className="pl-10 p-1.5 rounded-md border border-slate-600 bg-white dark:bg-slate-700 focus:ring-slate-500 focus:border-slate-500 outline-none w-full"
        />
      </form>
    </div>
  );
};

export default SearchBar;
