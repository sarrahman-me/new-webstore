import {
  AppBar,
  AreaList,
  MotifList,
  CatalogProducts,
  SearchBar,
} from "@/components";

export default function Home() {
  return (
    <main>
      <AppBar />
      <div className="p-2 md:p-4 space-y-6 md:space-y-10">
        <SearchBar />
        <AreaList />
        <MotifList />
        <CatalogProducts />
      </div>
      <div className="text-center text-xs text-slate-500 py-10">
        <p>Disupport oleh Toko Keramik Indonesia</p>
      </div>
    </main>
  );
}
