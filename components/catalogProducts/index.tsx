/* eslint-disable @next/next/no-img-element */
"use client";
import useSWR from "swr";
import { fetcher } from "@/utils";
import productDTO from "@/interface/product";

const CatalogProducts = () => {
  const { data, error, isLoading }: any = useSWR(
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
    </div>
  );
};

export default CatalogProducts;

const CardProduct = ({ product }: { product: productDTO }) => {
  return (
    <div className="rounded bg-white text-xs md:text-sm">
      <div className="relative">
        <img className="" src={product.images[0]} alt={product.nama_barang} />
        <p className="absolute bottom-0 left-0 p-0.5 text-white bg-black bg-opacity-50 text-xs rounded-sm">
          {product.ukuran}
        </p>
      </div>
      <div className="p-1 sm:p-1.5 md:p-2 space-y-1">
        <p className="text-xs md:text-sm text-slate-500">
          {product.kategori} {product.tekstur}
        </p>
        <p className="text-xs md:text-sm">{product.nama_barang}</p>
        <p
          className={`text-xs md:text-sm ${
            product.stok > 500
              ? "text-green-500"
              : product.stok < 50
              ? "text-orange-500"
              : product.stok < 15
              ? "text-red-500"
              : ""
          }`}
        >
          {product.stok} Dus
        </p>
      </div>
    </div>
  );
};
