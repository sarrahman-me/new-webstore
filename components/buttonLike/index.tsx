"use client";
import { setWishlistCount } from "@/redux/slice/wishlist";
import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useDispatch } from "react-redux";

const ButtonLike = ({ slug }: { slug: string }) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const chechIsLiked = () => {
      // Cek apakah barang sudah ada di wishlist ketika komponen dimuat
      const existingFavorites = JSON.parse(
        window.localStorage.getItem("favoriteProduct") || "[]"
      );

      const isProductInFavorites = existingFavorites.includes(slug);
      setIsLiked(isProductInFavorites);
    };

    chechIsLiked();
  }, [slug]);

  const handleLike = () => {
    const existingFavorites = JSON.parse(
      window.localStorage.getItem("favoriteProduct") || "[]"
    );

    const isProductInFavorites = existingFavorites.includes(slug);

    if (isProductInFavorites) {
      // Hapus barang dari wishlist jika sudah ada di dalamnya
      const updatedFavorites = existingFavorites.filter(
        (item: any) => item !== slug
      );

      window.localStorage.setItem(
        "favoriteProduct",
        JSON.stringify(updatedFavorites)
      );

      dispatch(setWishlistCount(existingFavorites.length - 1));
      setIsLiked(false); // Ubah status ke "tidak disukai"
    } else {
      // Tambahkan barang ke wishlist jika belum ada di dalamnya
      const updatedFavorites = [...existingFavorites, slug];

      window.localStorage.setItem(
        "favoriteProduct",
        JSON.stringify(updatedFavorites)
      );

      dispatch(setWishlistCount(existingFavorites.length + 1));
      setIsLiked(true); // Ubah status ke "disukai"
    }
  };

  return (
    <span
      title="Suka"
      onClick={handleLike}
      className={`${
        isLiked ? "bg-red-500 text-white" : " bg-white dark:bg-slate-800"
      } border rounded-full p-2 cursor-pointer`}
    >
      <AiOutlineLike className="text-lg md:text-xl" />
    </span>
  );
};

export default ButtonLike;
