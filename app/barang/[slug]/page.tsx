"use client";
/* eslint-disable @next/next/no-img-element */
import { AppBar, DetailProduct, KeramikPattern, SearchBar } from "@/components";
import productDTO from "@/interface/product";
import { fetcher } from "@/utils";
import useSWR from "swr";

export default function DetailProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/products/barang/${params.slug}`,
    fetcher
  );

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <p>Error Fetch Products</p>;
  }

  const products: productDTO = data.data;

  return (
    <main>
      <AppBar arrowBack />
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-10 p-2 md:p-4">
        <SearchBar />

        {/* detail product */}
        <DetailProduct product={products} />

        {/* keramik Patten Simulation */}
        <KeramikPattern imageUrl={products.images[0]} />
      </div>
      <div className="text-center text-xs text-slate-500 py-10">
        <p>Disupport oleh Toko Keramik Indonesia</p>
      </div>
    </main>
  );
}
