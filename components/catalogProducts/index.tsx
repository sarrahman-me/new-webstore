/* eslint-disable @next/next/no-img-element */
"use client";
import useSWR from "swr";
import { fetcher } from "@/utils";
import productDTO from "@/interface/product";
import CardProduct from "../cardProduct";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useRouter, useSearchParams } from "next/navigation";
import metadataProduct from "@/interface/metadataProduct";
import { useState } from "react";
import HelperComponent from "../helperComponent";

const CatalogProducts = ({
  pagination = true,
  atribut,
  title,
  hiddenInLimit = 1,
  minstok = 25,
  limit = 48,
  productReplace,
  hiddenIfNotFound,
}: {
  pagination?: boolean;
  atribut?: string;
  title?: string;
  // hiddenInLimit adalah angka dimana jika angka itu lebih kecil dengan jumlah barang maka component ini akan  hilang
  hiddenInLimit?: number;
  minstok?: number;
  limit?: number;
  productReplace?: productDTO[];
  hiddenIfNotFound?: boolean;
}) => {
  const params = useSearchParams();

  let page = params.get("page") || 1;
  const { data, error, isLoading } = useSWR(
    `${
      process.env.NEXT_PUBLIC_HOST
    }/products/barang?page=${page}&limit=${limit}&${atribut}${
      minstok === 0 ? "" : `&minstok=${minstok}`
    }`,
    fetcher
  );

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return (
      <HelperComponent
        imageUrl="https://tokokeramik-assets.s3.ap-southeast-1.amazonaws.com/11104-removebg-preview.png"
        title="Kesalahan Tak Terduga"
      />
    );
  }

  const products: productDTO[] = productReplace || data.data;
  const metadata: metadataProduct = data.metadata;

  if (products.length === 0 && !hiddenIfNotFound) {
    return (
      <HelperComponent
        imageUrl="https://tokokeramik-assets.s3.ap-southeast-1.amazonaws.com/9169253-removebg-preview.png"
        title="Produk Tidak Ditemukan"
      />
    );
  }

  return (
    <div
      className={`space-y-2 ${
        products.length <= hiddenInLimit && hiddenIfNotFound ? "hidden" : ""
      }`}
    >
      <p className="font-semibold underline">{title || "Semua Barang"}</p>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {products.map((product, i) => (
          <CardProduct key={i} product={product} />
        ))}
      </div>
      {pagination && !productReplace && <NextPrevious metadata={metadata} />}
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
      <ButtonArrow
        icon={<GrFormPrevious />}
        handleButton={handlePrevPage}
        disabled={currentPage === 1}
        title={"Sebelumnya"}
        iconPostition="left"
      />
      <ButtonArrow
        icon={<GrFormNext />}
        handleButton={handleNextPage}
        disabled={currentPage === metadata?.totalPages}
        title={"Selanjutnya"}
        iconPostition="right"
      />
    </div>
  );
};

const ButtonArrow = ({
  icon,
  handleButton,
  disabled,
  title,
  iconPostition,
}: {
  icon: any;
  handleButton: () => void;
  disabled: boolean;
  title: string;
  iconPostition: "right" | "left";
}) => {
  return (
    <button
      disabled={disabled}
      onClick={handleButton}
      className={`flex ${
        iconPostition === "right" ? "flex-row" : "flex-row-reverse"
      } items-center border dark:border-slate-500 disabled:border-none bg-white dark:bg-slate-700 rounded p-2 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed`}
    >
      <p>{title}</p>
      {icon}
    </button>
  );
};
