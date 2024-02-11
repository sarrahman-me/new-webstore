import {
  AppBar,
  AreaList,
  MotifList,
  CatalogProducts,
  SearchBar,
  Footer,
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
      <Footer />
    </main>
  );
}
