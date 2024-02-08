"use client";
import useSWR from "swr";
import { fetcher } from "@/utils";
import productDTO from "@/interface/product";
import CardProduct from "../cardProduct";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const CatalogProducts = () => {
  const { data, error, isLoading } = useSWR(
    "https://api.tokokeramik.com/products/barang?limit=48&minstok=25",
    fetcher
  );

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <p>Error Fetch Products</p>;
  }

  const products: productDTO[] = data.data;

  return (
    <div className="space-y-2">
      <p className="font-semibold underline">Semua Barang</p>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-1 md:gap-2">
        {products.map((product, i) => (
          <CardProduct key={i} product={product} />
        ))}
      </div>
      <div className="flex justify-between items-center text-xs sm:text-sm">
        <div className="flex items-center bg-white dark:bg-slate-800 rounded p-1 px-2">
          <GrFormPrevious />
          <p>Sebelumnya</p>
        </div>
        <div className="flex items-center bg-white dark:bg-slate-800 rounded p-1 px-2">
          <p>Selanjutnya</p>
          <GrFormNext />
        </div>
      </div>
    </div>
  );
};

export default CatalogProducts;
