"use client";
import { AppBar, CatalogProducts, SearchBar } from "@/components";
import productDTO from "@/interface/product";
import { fetcher } from "@/utils";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

export default function Pencarian() {
  const params = useSearchParams();
  let query = params.get("query") || "";
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/products/search?query=${query}`,
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
    <main>
      <AppBar arrowBack />
      <div className="p-2 md:p-4 space-y-6 md:space-y-10">
        <SearchBar />
        <CatalogProducts
          limit={1} // limit tidak berpengaruh jika ada product replace
          productReplace={products}
          title={`Pencarian ${query}`}
        />
      </div>
      <div className="text-center text-xs text-slate-500 py-10">
        <p>Disupport oleh Toko Keramik Indonesia</p>
      </div>
    </main>
  );
}
