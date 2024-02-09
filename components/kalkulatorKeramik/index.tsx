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
  const [sisi, setSisi] = useState<number>(0);
  const [result, setResult] = useState<resultInterface>();

  const handleHitung = (e: any) => {
    e.preventDefault();

    const result = RumusHitungKeramik(
      ukuranKeramik,
      panjang,
      lebar,
      tinggi,
      sisi
    );

    setResult(result);
  };

  return (
    <div className="space-y-2 border bg-white dark:bg-slate-800 rounded-md dark:border-slate-500 p-2 md:p-4">
      <p className="font-semibold underline">Hitung Keperluan keramik ini</p>
      <form onSubmit={handleHitung} action="" className="space-y-2">
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
            <Textfield
              onChange={(value) => setSisi(value)}
              placeholder="Jumlah Sisi Ruangan"
            />
          </>
        )}
        <button
          type="submit"
          className="bg-slate-800 dark:bg-slate-200 text-white dark:text-black p-1 px-2 rounded-md"
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
        Diameter Ruangan: {result.diameter_ruang} m<sup>2</sup>
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
  return (
    <div>
      <input
        onChange={(e: any) => onChange(e.target.value)}
        placeholder={placeholder}
        className="p-2 bg-white border-slate-600 dark:bg-slate-700 rounded-md border focus:ring-slate-500 focus:border-slate-500 outline-none w-full"
        type="number"
      />
    </div>
  );
};

// algortima penghitung keramik
const RumusHitungKeramik = (
  ukuranKeramik: string,
  panjang: number,
  lebar: number,
  tinggi: number,
  sisi: number
) => {
  if (isDinding(ukuranKeramik)) {
    // rumus penghitung keramik dinding

    const diameter_ruang = panjang * lebar;
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
    const diameter_ruang = panjang * lebar;
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
