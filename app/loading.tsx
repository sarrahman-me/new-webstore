"use client";

/**
 * Halaman Loading digunakan untuk menampilkan animasi saat halaman loading.
 */

export default function LoadingPage() {
  return (
    <div
      className="flex justify-center items-center h-screen w-screen"
      role="status"
    >
      <p>Loading...</p>
    </div>
  );
}
