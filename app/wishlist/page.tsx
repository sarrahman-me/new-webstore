"use client";
import {
  AppBar,
  CatalogProducts,
  Footer,
  HelperComponent,
  SearchBar,
} from "@/components";
import productDTO from "@/interface/product";
import { useEffect, useState } from "react";

export default function Wishlist() {
  const [productWish, setWish] = useState<productDTO[]>([]);
  const [productNull, setProductNull] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const existingFavorites: string[] = JSON.parse(
        window.localStorage.getItem("favoriteProduct") || "[]"
      );

      if (existingFavorites.length !== 0) {
        const productsResponse = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/products/barang/slugs`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              slugs: existingFavorites,
            }),
          }
        );

        const dataProduct: { data: productDTO[] } =
          await productsResponse.json();

        setWish(dataProduct.data);
        setProductNull(false);
      }
    };

    getData();
  }, []);

  return (
    <main>
      <AppBar arrowBack title="Favorit" />
      <div className="p-2 md:p-4 space-y-6 md:space-y-8">
        <SearchBar />

        {!productNull ? (
          <div className="space-y-6 md:space-y-8">
            <CatalogProducts
              title="Produk Favorit"
              productReplace={productWish}
              limit={1}
            />
            <CatalogProducts
              atribut={`kategori=${productWish[0].kategori}&ukuran=${productWish[0].ukuran}&motif=${productWish[0].motif}`}
              title="Mungkin kamu suka"
              limit={24}
              pagination={false}
            />
            {productWish[1]?.nama_barang &&
              productWish[0].ukuran !== productWish[1].ukuran &&
              productWish[0].motif !== productWish[1].motif && (
                <CatalogProducts
                  atribut={`kategori=${productWish[1].kategori}&ukuran=${productWish[1].ukuran}&motif=${productWish[1].motif}`}
                  title="Rekomendasi Lain"
                  limit={24}
                  pagination={false}
                />
              )}
          </div>
        ) : (
          <div>
            <HelperComponent
              imageUrl="https://tokokeramik-assets.s3.ap-southeast-1.amazonaws.com/9169253-removebg-preview.png"
              title="Tidak ada yang favorit"
            />
            <CatalogProducts title="Mungkin kamu suka" />
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
