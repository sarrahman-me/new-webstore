"use client";
import {
  AppBar,
  CatalogProducts,
  FilterProducts,
  Footer,
  SearchBar,
} from "@/components";
import { useSearchParams } from "next/navigation";

export default function Filter() {
  const params = useSearchParams();
  let motif = params.get("motif") || "";
  let area = params.get("area") || "";
  let ukuran = params.get("ukuran") || "";
  let kategori = params.get("kategori") || "";
  let tekstur = params.get("tekstur") || "";

  return (
    <main>
      <AppBar arrowBack />
      <div className="p-2 md:p-4 space-y-4 md:space-y-6">
        <SearchBar />
        <FilterProducts />
        <CatalogProducts
          title={`Produk ${kategori} ${motif} ${ukuran} ${tekstur}`}
          atribut={`kategori=${kategori}&ukuran=${ukuran}&motif=${motif}&tekstur=${tekstur}&area=${area}`}
        />
      </div>
      <Footer />
    </main>
  );
}
