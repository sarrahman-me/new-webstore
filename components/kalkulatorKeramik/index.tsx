"use client";
import { useState } from "react";

// schema / tipe data dari hasil
interface resultInterface {
  Kebutuhan: number;
  diameter_ruang: number;
  diameter_keramik: number;
  ukuran_keramik: string;
  lembar_per_dus: number;
}

// Objek yang berisi informasi ukuran keramik dan isi per dus
const ukuranKeramikDanIsi: any = {
  "25x25": 16,
  "30x30": 11,
  "40x40": 6,
  "50x50": 4,
  "60x60": 4,
  "20x40": 12,
  "25x40": 10,
  "25x50": 8,
  "30x60": 6,
};

const KalkulatorKeramik = ({ ukuranKeramik }: { ukuranKeramik: string }) => {
  const [panjang, setPanjang] = useState<number>(0);
  const [lebar, setLebar] = useState<number>(0);
  const [tinggi, setTinggi] = useState<number>(0);
  const [result, setResult] = useState<resultInterface>();

  const handleHitung = (e: any) => {
    e.preventDefault();

    const result = RumusHitungKeramik(ukuranKeramik, panjang, lebar, tinggi);

    setResult(result);
  };

  return (
    <div className="space-y-2 border bg-white dark:bg-slate-800 rounded-md dark:border-slate-500 p-2 md:p-4">
      <p className="font-semibold underline">Hitung Keperluan keramik</p>
      <form
        onSubmit={handleHitung}
        action=""
        className="space-y-3 md:space-y-5"
      >
        <Textfield
          onChange={(value) => setPanjang(value)}
          placeholder="Panjang Ruangan"
        />
        <Textfield
          onChange={(value) => setLebar(value)}
          placeholder="Lebar Ruangan"
        />
        {isDinding(ukuranKeramik) && (
          <>
            <Textfield
              onChange={(value) => setTinggi(value)}
              placeholder="Tinggi Ruangan"
            />
          </>
        )}
        <button
          type="submit"
          className="w-full bg-slate-800 dark:bg-slate-200 text-white dark:text-black p-1 px-2 rounded-md"
        >
          Hitung
        </button>
      </form>
      {result?.Kebutuhan && <ResultComp result={result} />}
    </div>
  );
};

export default KalkulatorKeramik;

// design hasil
const ResultComp = ({ result }: { result: resultInterface }) => {
  return (
    <div className="space-y-2 my-2">
      <p className="md:text-lg font-medium">
        Kebutuhan: {result.Kebutuhan} Dus
      </p>
      <p className="text-sm md:text-base font-medium">
        Diameter Ruangan: {result.diameter_ruang.toFixed(2)} m<sup>2</sup>
      </p>
      <p className="text-sm md:text-base font-medium">
        Diameter Keramik: {result.diameter_keramik.toFixed(2)} m<sup>2</sup>
      </p>
      <p className="text-sm md:text-base font-medium">
        Ukuran Keramik: {result.ukuran_keramik}
      </p>
      <p className="text-sm md:text-base font-medium">
        Lembar Per Dus: {result.lembar_per_dus}
      </p>
      <p className="text-xs text-orange-500">
        Catatan : Lembar keramik per dus di ambil dari lembar keramik rata rata
        di ukuran tersebut dan tidak menentukan isi dari keramik yang kamu lihat
      </p>
      {isDinding(result.ukuran_keramik) && (
        <p className="text-xs text-orange-500">
          Catatan : Perhitungan ini mengasumsikan jika ruangan memiliki 4 sisi
          yang akan di pasang keramik
        </p>
      )}
    </div>
  );
};

// design textfield
const Textfield = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: (value: any) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value); // Parse nilai sebagai float
    onChange(isNaN(value) ? 0 : value); // Jika nilai tidak valid, gunakan 0
  };

  return (
    <div>
      <input
        onChange={handleChange}
        placeholder={placeholder}
        className="p-2 bg-white border-slate-600 dark:bg-slate-700 rounded-md border focus:ring-slate-500 focus:border-slate-500 outline-none w-full"
        type="text"
      />
      <p className="text-xs text-gray-500">
        Gunakan titik jika desimal misalnya 2.5
      </p>
    </div>
  );
};

// algortima penghitung keramik
const RumusHitungKeramik = (
  ukuranKeramik: string,
  panjang: number,
  lebar: number,
  tinggi: number
) => {
  if (isDinding(ukuranKeramik)) {
    // rumus penghitung keramik dinding

    // rumus asumsi ruangan memiliki 4 sisi
    const diameter_ruang =
      (Number(panjang) + Number(panjang) + Number(lebar) + Number(lebar)) *
      Number(tinggi);

    const diameter_keramik =
      (parseInt(ukuranKeramik.split("x")[0]) / 100) *
      (parseInt(ukuranKeramik.split("x")[1]) / 100) *
      ukuranKeramikDanIsi[ukuranKeramik];

    return {
      Kebutuhan: Math.ceil(diameter_ruang / diameter_keramik),
      diameter_ruang,
      diameter_keramik,
      ukuran_keramik: ukuranKeramik,
      lembar_per_dus: ukuranKeramikDanIsi[ukuranKeramik],
    };
  } else {
    // rumus penghitung keramik lantai
    const diameter_ruang = Number(panjang) * Number(lebar);
    const diameter_keramik =
      (parseInt(ukuranKeramik.split("x")[0]) / 100) *
      (parseInt(ukuranKeramik.split("x")[1]) / 100) *
      ukuranKeramikDanIsi[ukuranKeramik];

    return {
      Kebutuhan: Math.ceil(diameter_ruang / diameter_keramik),
      diameter_ruang,
      diameter_keramik,
      ukuran_keramik: ukuranKeramik,
      lembar_per_dus: ukuranKeramikDanIsi[ukuranKeramik],
    };
  }
};

// fungsi untuk check apakah keramik dinding atau bukan
const isDinding = (ukuran: string) => {
  if (ukuran.split("x")[0] === ukuran.split("x")[1]) {
    return false;
  } else {
    return true;
  }
};
