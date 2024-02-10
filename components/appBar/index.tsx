"use client";
import { AiOutlineLike, AiOutlineSearch } from "react-icons/ai";
import { IoLogoGoogle, IoMdArrowBack } from "react-icons/io";
import { ToggleDarkMode } from "..";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWishlistCount } from "@/redux/slice/wishlist";

const AppBar = ({
  arrowBack,
  title,
}: {
  arrowBack?: boolean;
  title?: string;
}) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 bg-slate-200 dark:bg-slate-900 p-2 md:p-4 select-none">
      {arrowBack && (
        <IoMdArrowBack
          onClick={() => router.back()}
          className="cursor-pointer text-xl"
        />
      )}
      {title ? (
        <p className="font-bold md:text-lg">{title}</p>
      ) : (
        <LogoCompany />
      )}
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
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center space-x-1 md:space-x-2 cursor-pointer"
    >
      <IoLogoGoogle className="text-lg md:text-2xl" />
      <p className="font-bold md:text-lg">Tester Webstore Mitra</p>
    </div>
  );
};

const Searchbox = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const handleSerch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/barang/pencarian?query=${query}`);
  };

  return (
    <form onSubmit={handleSerch} className="relative hidden md:flex">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <AiOutlineSearch />
      </span>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        placeholder="Cari Sesuatu ..."
        className="pl-10 p-1 bg-white border-slate-600 dark:bg-slate-700 rounded-md border focus:ring-slate-500 focus:border-slate-500 outline-none sm:min-w-72"
      />
    </form>
  );
};

const LikeIcon = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { wishlistCount } = useSelector((state: any) => state.wishlist);

  useEffect(() => {
    const chechIsLiked = () => {
      const existingFavorites: string[] = JSON.parse(
        window.localStorage.getItem("favoriteProduct") || "[]"
      );

      dispatch(setWishlistCount(existingFavorites.length));
    };

    chechIsLiked();
  }, [dispatch]);

  return (
    <div
      onClick={() => router.push("/wishlist")}
      className="border border-slate-500 rounded-md bg-slate-50 dark:bg-slate-700 flex items-center p-1 space-x-1 cursor-pointer"
    >
      <AiOutlineLike className="text-xl md:text-2xl" />
      <span className="text-sm md:text-base">{wishlistCount || 0}</span>
    </div>
  );
};
