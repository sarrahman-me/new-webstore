"use client";
/* eslint-disable @next/next/no-img-element */
import { IoLogoWhatsapp } from "react-icons/io";
import {
  AppBar,
  CatalogProducts,
  DetailProduct,
  KalkulatorKeramik,
  KeramikPattern,
  SearchBar,
} from "@/components";
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
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 p-2 md:p-4">
        <SearchBar />

        {/* detail product */}
        <DetailProduct product={products} />

        {/* keramik Patten Simulation */}
        <KeramikPattern imageUrl={products.images[0]} />

        {/* Kalkulator Keramik */}
        <KalkulatorKeramik ukuranKeramik={products.ukuran} />

        {/* Tombol Pesan */}
        <button className="flex items-center justify-center p-1 px-2 bg-green-500 text-white w-full rounded-md">
          <IoLogoWhatsapp className="text-lg mr-2" />
          Whatsapp
        </button>
      </div>

      <div className="space-y-6 md:space-y-8">
        {/* catalog produk warna lainnya */}
        <CatalogProducts
          minstok={0}
          hiddenInLimit={2}
          title="Warna Lainnya"
          pagination={false}
          atribut={`nama=${products.nama_barang}&brand=${products.brand}&ukuran=${products.ukuran}`}
        />

        {/* catalog produk rekomendasi */}
        <CatalogProducts
          limit={96}
          title="Rekomendasi"
          pagination={false}
          atribut={`kategori=${products.kategori}&ukuran=${products.ukuran}&motif=${products.motif}&tekstur=${products.tekstur}`}
        />
      </div>
      <div className="text-center text-xs text-slate-500 py-10">
        <p>Disupport oleh Toko Keramik Indonesia</p>
      </div>
    </main>
  );
}
