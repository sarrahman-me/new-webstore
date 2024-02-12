"use client";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { RadioGroup } from "@headlessui/react";
import { Footer } from "..";
import { useRouter } from "next/navigation";

const sizes = [
  "80x80",
  "60x60",
  "50x50",
  "40x40",
  "30x30",
  "25x25",
  "20x40",
  "25x40",
  "25x50",
  "30x60",
  "60x120",
];
const kategoriList = ["Keramik", "Granit"];
const teksturList = ["Glossy", "Matt", "Embossed", "Rock"];
const motifList = [
  "Basic (Polos)",
  "Marble",
  "Wood (Kayu)",
  "Stone (Batu)",
  "Fancy",
  "Rustic",
  "Striped (Garis)",
];

const FilterProducts = () => {
  const router = useRouter();
  const [openFilter, setOpen] = useState<boolean>(false);
  const [ukuran, setUkuran] = useState<string>("");
  const [motif, setMotif] = useState<string>("");
  const [kategori, setKategori] = useState<string>("");
  const [tekstur, setTekstur] = useState<string>("");

  return (
    <div>
      <span
        onClick={() => setOpen(!openFilter)}
        className="select-none inline-flex p-1 px-2 bg-slate-500 text-white space-x-2 items-center border rounded-md cursor-pointer"
      >
        <CiFilter />
        <p>Filter Barang</p>
      </span>

      {
        <div
          className={`space-y-10 bg-white fixed top-0 right-0 z-50 h-screen transition duration-700 ease-in-out  ${
            openFilter ? "w-full md:w-96 lg:w-1/3 p-4 md:p-7" : "hidden w-0"
          }`}
        >
          {/* header */}
          <div className="flex justify-between items-center">
            <p className="font-semibold underline">Filter Barang</p>
            <GrClose
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          </div>

          {/* filter 1 - kategori */}
          <RadioComp
            title="Pilih Kategori"
            options={kategoriList}
            selectedValue={kategori}
            setSelectedValue={setKategori}
          />

          {/* filter 2 - ukuran */}
          <RadioComp
            title="Pilih Ukuran"
            options={sizes}
            selectedValue={ukuran}
            setSelectedValue={setUkuran}
          />

          {/* filter 3 - motif */}
          <RadioComp
            title="Pilih Motif"
            options={motifList}
            selectedValue={motif}
            setSelectedValue={setMotif}
          />

          {/* filter 4 - tekstur */}
          <RadioComp
            title="Pilih Tekstur"
            options={teksturList}
            selectedValue={tekstur}
            setSelectedValue={setTekstur}
          />

          {/* tombol aksi */}
          <div className="flex justify-evenly items-center my-3">
            <button className="border p-1 px-2 rounded-md">Reset</button>
            <button
              onClick={() => {
                router.push(
                  `/barang/filter?kategori=${kategori}&ukuran=${ukuran}&motif=${motif}&tekstur=${tekstur}`
                );
                setOpen(false);
              }}
              className="border p-1 px-2 rounded-md bg-slate-500 text-white"
            >
              Terapkan
            </button>
          </div>
          <Footer />
        </div>
      }
    </div>
  );
};

export default FilterProducts;

const RadioComp = ({
  title,
  selectedValue,
  options,
  setSelectedValue,
}: {
  title: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  options: string[];
}) => {
  return (
    <RadioGroup
      className="space-y-3"
      value={selectedValue}
      onChange={setSelectedValue}
    >
      <RadioGroup.Label className="font-medium">{title}</RadioGroup.Label>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-3 text-xs md:text-sm">
        {options.map((opt) => (
          <RadioGroup.Option value={opt} key={opt}>
            {({ checked }) => (
              <span
                className={
                  checked
                    ? "bg-slate-500 text-white p-1 rounded-full border"
                    : "p-1 rounded-full"
                }
              >
                {opt}
              </span>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
