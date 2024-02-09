"use client";
import { AppBar, CatalogProducts, SearchBar } from "@/components";
import { useSearchParams } from "next/navigation";

export default function Filter() {
  const params = useSearchParams();
  let motif = params.get("motif") || "";
  let area = params.get("area") || "";

  return (
    <main>
      <AppBar arrowBack />
      <div className="p-2 md:p-4 space-y-6 md:space-y-10">
        <SearchBar />
        <CatalogProducts atribut={`motif=${motif}&area=${area}`} />
      </div>
      <div className="text-center text-xs text-slate-500 py-10">
        <p>Disupport oleh Toko Keramik Indonesia</p>
      </div>
    </main>
  );
}
