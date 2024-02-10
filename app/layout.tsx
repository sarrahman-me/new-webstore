import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./storeProvider";

export const metadata: Metadata = {
  title: "Webstore Mitra",
  description: "Toko keramik dan granit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body id="root">
        <StoreProvider>
          <div className="bg-gradient-to-t from-slate-50 via-slate-100 to-slate-200 dark:from-slate-800  dark:to-slate-900 text-black dark:text-white min-h-screen">
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
