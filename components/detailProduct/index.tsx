import productDTO from "@/interface/product";

/* eslint-disable @next/next/no-img-element */
const DetailProduct = ({ product }: { product: productDTO }) => {
  return (
    <div>
      <ImageProduct product={product} />
      <div className="space-y-2 p-2 md:p-4 bg-white dark:bg-slate-800 border-b dark:border-slate-500 rounded-b-md">
        <p className="text-lg md:text-xl font-medium">
          {product.nama_barang}{" "}
          {product.warna?.replace(/\([^)]*\)/g, "").trim()}
        </p>
        <p className="text-sm md:text-base">
          Stok: {product.stok} Dus <sup>*</sup>
        </p>
        <p className="text-sm md:text-base">Brand: {product.brand}</p>
        <p className="text-sm md:text-base">Kategori: {product.kategori}</p>
        <p className="text-sm md:text-base">Ukuran: {product.ukuran}</p>
        <p className="text-sm md:text-base">Motif: {product.motif}</p>
        <p className="text-sm md:text-base">Tekstur: {product.tekstur}</p>
        <p className="text-sm md:text-base">Kualitas: {product.kualitas}</p>
        <p className="text-xs text-slate-500">
          <sup>*</sup> Stok dapat berubah setiap saat
        </p>
      </div>
    </div>
  );
};

export default DetailProduct;

const ImageProduct = ({ product }: { product: productDTO }) => {
  return (
    <div className="relative">
      <img
        className="w-full max-h-96 object-cover object-bottom rounded-t-md"
        src="https://tokokeramik-assets.s3.ap-southeast-1.amazonaws.com/photo-1602028915047-37269d1a73f7.avif"
        alt={product.nama_barang}
      />
      <div className="absolute bottom-0 right-5 border shadow-lg shadow-slate-400 dark:shadow-slate-600">
        <img className="h-32 w-32" src={product.images[0]} alt={product.slug} />
      </div>
    </div>
  );
};
