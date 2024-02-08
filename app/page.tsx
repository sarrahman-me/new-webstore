import { AppBar, AreaList, MotifList, CatalogProducts } from "@/components";

export default function Home() {
  return (
    <main className="space-y-6 md:space-y-10 bg-gradient-to-t from-slate-50 via-slate-100 to-slate-200 text-black p-2 md:p-4">
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
