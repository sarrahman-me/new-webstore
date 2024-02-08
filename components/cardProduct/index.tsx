/* eslint-disable @next/next/no-img-element */
import productDTO from "@/interface/product";
import isNewProduct from "@/utils/isNew";

const CardProduct = ({ product }: { product: productDTO }) => {
  return (
    <div className="rounded bg-white dark:bg-slate-900 dark:border border-slate-500 text-xs md:text-sm">
      <div className="relative">
        <div className="flex justify-center">
          <img
            className="object-contain max-h-28 md:max-h-36 lg:max-h-40 border border-slate-100 dark:border-slate-500"
            src={product.images[0]}
            alt={product.nama_barang}
          />
        </div>
        {isNewProduct(product.createdAt, 7) ? (
          <p className="absolute top-0 left-0 p-1 text-white bg-red-500 bg-opacity-90 rounded-br text-xs">
            Baru
          </p>
        ) : null}
        <p className="absolute bottom-0 left-0 p-0.5 text-white bg-black bg-opacity-50 text-xs rounded-tr-sm">
          {product.ukuran}
        </p>
      </div>
      <div className="p-1 sm:p-1.5 md:p-2 space-y-1">
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
          {product.kategori} {product.tekstur}
        </p>
        <p className="text-xs md:text-sm font-medium">{product.nama_barang}</p>
        <p
          className={`text-xs md:text-sm font-medium ${
            product.stok > 500
              ? "text-green-500"
              : product.stok < 50
              ? "text-orange-500"
              : product.stok < 15
              ? "text-red-500"
              : ""
          }`}
        >
          {product.stok} Dus
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
