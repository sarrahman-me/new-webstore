"use client";
import {
  AppBar,
  CatalogProducts,
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
      <AppBar arrowBack title="Wishlist" />
      <div className="p-2 md:p-4 space-y-6 md:space-y-10">
        <SearchBar />

        {!productNull ? (
          <CatalogProducts
            title="Produk Favorit"
            productReplace={productWish}
            limit={1}
          />
        ) : (
          <HelperComponent
            imageUrl="https://tokokeramik-assets.s3.ap-southeast-1.amazonaws.com/9169253-removebg-preview.png"
            title="Tidak ada yang favorit"
          />
        )}

        <CatalogProducts title="Mungkin kamu suka" />
      </div>
      <div className="text-center text-xs text-slate-500 py-10">
        <p>Disupport oleh Toko Keramik Indonesia</p>
      </div>
    </main>
  );
}
