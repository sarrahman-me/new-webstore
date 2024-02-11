"use client";
import productDTO from "@/interface/product";
import { MdOutlineReportProblem } from "react-icons/md";

const ButtonReportProduct = ({ product }: { product: productDTO }) => {
  const handleReport = async () => {
    const message = prompt(`Pesan Laporan untuk ${
      product.nama_barang
    } ${product.warna?.replace(/\([^)]*\)/g, "").trim()}
    `);

    if (message) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/message/send/email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: message,
            to: "sarrahman.me@gmail.com",
            subject: `Laporan Produk ${product.nama_barang}`,
          }),
        }
      );

      const reportResult: {
        message: string;
        status: number;
        success: boolean;
      } = await response.json();

      if (reportResult.success) {
        alert("Terima kasih atas laporannya");
      } else alert("Gagal mengirimkan laporan");
    }
  };

  return (
    <span
      onClick={handleReport}
      title="Laporkan Kesalahan Data"
      className={`bg-white dark:bg-slate-800 border rounded-full p-2 cursor-pointer`}
    >
      <MdOutlineReportProblem className="text-lg md:text-xl" />
    </span>
  );
};

export default ButtonReportProduct;
