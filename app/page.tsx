import { AppBar, AreaList, MotifList, CatalogProducts } from "@/components";

export default function Home() {
  return (
    <main className="space-y-6 md:space-y-10 bg-gradient-to-t dark:bg-gradient-to-tr from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800  dark:to-slate-900 text-black dark:text-white p-2 md:p-4 min-h-screen">
      <AppBar />
      <AreaList />
      <MotifList />
      <CatalogProducts />
      <div className="text-center text-xs text-slate-500">
        <p>Disupport oleh Toko Keramik Indonesia</p>
      </div>
    </main>
  );
}
