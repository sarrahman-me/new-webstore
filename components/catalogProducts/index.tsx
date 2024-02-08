"use client";
import useSWR from "swr";
import { fetcher } from "@/utils";
import productDTO from "@/interface/product";
import CardProduct from "../cardProduct";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useRouter, useSearchParams } from "next/navigation";
import metadataProduct from "@/interface/metadataProduct";
import { useState } from "react";

const CatalogProducts = () => {
  const params = useSearchParams();
  let page = params.get("page") || 1;
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/products/barang?page=${page}&limit=48&minstok=25`,
    fetcher
  );

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <p>Error Fetch Products</p>;
  }

  const products: productDTO[] = data.data;
  const metadata: metadataProduct = data.metadata;

  return (
    <div className="space-y-2">
      <p className="font-semibold underline">Semua Barang</p>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {products.map((product, i) => (
          <CardProduct key={i} product={product} />
        ))}
      </div>
      <NextPrevious metadata={metadata} />
    </div>
  );
};

export default CatalogProducts;

const NextPrevious = ({ metadata }: { metadata: metadataProduct }) => {
  const router = useRouter();
  const params = useSearchParams();
  let page = params.get("page");
  const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1);

  const handleNextPage = () => {
    if (currentPage < metadata?.totalPages) {
      const nextPage = currentPage + 1;
      const queryParams = new URLSearchParams(params.toString());
      queryParams.set("page", nextPage.toString());
      router.push(`?${queryParams.toString()}`);
      setCurrentPage(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      const queryParams = new URLSearchParams(params.toString());
      queryParams.set("page", prevPage.toString());
      router.push(`?${queryParams.toString()}`);
      setCurrentPage(prevPage);
    }
  };

  return (
    <div className="flex justify-between items-center text-xs sm:text-sm">
      <div
        onClick={handlePrevPage}
        className="flex items-center bg-white dark:bg-slate-800 rounded p-2"
      >
        <GrFormPrevious />
        <p>Sebelumnya</p>
      </div>
      {currentPage}
      <div
        onClick={handleNextPage}
        className="flex items-center bg-white dark:bg-slate-800 rounded p-2"
      >
        <p>Selanjutnya</p>
        <GrFormNext />
      </div>
    </div>
  );
};
