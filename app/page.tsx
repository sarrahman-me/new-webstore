import {
  AppBar,
  AreaList,
  MotifList,
  CatalogProducts,
  SearchBar,
} from "@/components";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800  dark:to-slate-900 text-black dark:text-white min-h-screen">
      <AppBar />
      <div className="p-2 md:p-4 space-y-6 md:space-y-10">
        <SearchBar />
        <AreaList />
        <MotifList />
        <CatalogProducts />
      </div>
      <div className="text-center text-xs text-slate-500">
        <p>Disupport oleh Toko Keramik Indonesia</p>
      </div>
    </main>
  );
}
