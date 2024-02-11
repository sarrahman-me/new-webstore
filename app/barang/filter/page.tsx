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

  return (
    <main>
      <AppBar arrowBack />
      <div className="p-2 md:p-4 space-y-4 md:space-y-6">
        <SearchBar />
        <FilterProducts />
        <CatalogProducts
          title={`Produk ${motif} ${area}`}
          atribut={`motif=${motif}&area=${area}`}
        />
      </div>
      <Footer />
    </main>
  );
}
