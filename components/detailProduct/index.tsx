import productDTO from "@/interface/product";
import ButtonLike from "../buttonLike";

/* eslint-disable @next/next/no-img-element */
const DetailProduct = ({ product }: { product: productDTO }) => {
  return (
    <div>
      {product.images[1] ? (
        <ImageProductWithPreview product={product} />
      ) : (
        <ImageProduct product={product} />
      )}
      <div className="space-y-2 p-2 md:p-4 bg-white dark:bg-slate-800 border-b dark:border-slate-500 rounded-b-md">
        <p className="text-lg md:text-xl font-semibold">
          {product.nama_barang}{" "}
          {product.warna?.replace(/\([^)]*\)/g, "").trim()}
        </p>
        <p className="text-sm md:text-base font-medium">
          Stok: {product.stok} Dus <sup>*</sup>
        </p>
        <p className="text-sm md:text-base font-medium">
          Brand: {product.brand}
        </p>
        <p className="text-sm md:text-base font-medium">
          Kategori: {product.kategori}
        </p>
        <p className="text-sm md:text-base font-medium">
          Ukuran: {product.ukuran}
        </p>
        <p className="text-sm md:text-base font-medium">
          Motif: {product.motif}
        </p>
        <p className="text-sm md:text-base font-medium">
          Tekstur: {product.tekstur}
        </p>
        <p className="text-sm md:text-base font-medium">
          Kualitas: {product.kualitas}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xs text-orange-500">
            <sup>*</sup> Stok dapat berubah setiap saat
          </p>
          <ButtonLike slug={product.slug} />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;

const ImageProductWithPreview = ({ product }: { product: productDTO }) => {
  return (
    <div className="relative">
      <img
        className="w-full max-h-96 object-cover object-bottom rounded-t-md"
        src={product.images[1] || "https://placehold.co/600x400"}
        alt={product.nama_barang}
      />
      <div className="absolute bottom-0 right-5 border shadow-lg shadow-slate-400 dark:shadow-slate-600">
        <img
          className="max-h-28 sm:max-h-48"
          src={
            product.images[0] ||
            "https://ik.imagekit.io/sarrahmanme/No-Image-Placeholder.svg.png?updatedAt=1701908821050"
          }
          alt={product.slug}
        />
      </div>
    </div>
  );
};

const ImageProduct = ({ product }: { product: productDTO }) => {
  return (
    <div className="flex justify-center my-2">
      <img
        className="border"
        src={
          product.images[0] ||
          "https://ik.imagekit.io/sarrahmanme/No-Image-Placeholder.svg.png?updatedAt=1701908821050"
        }
        alt={product.slug}
        width={250}
        height={250}
      />
    </div>
  );
};
