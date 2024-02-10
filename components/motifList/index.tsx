"use client";
import { IoIosColorPalette } from "react-icons/io";
import { GiStonePile, GiWoodPile, GiMarbles } from "react-icons/gi";
import { SiWeightsandbiases } from "react-icons/si";
import { MdDraw } from "react-icons/md";
import { useRouter } from "next/navigation";

const MotifList = () => {
  return (
    <div className="space-y-2 select-none">
      <p className="font-semibold underline">Motif Populer</p>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
        <MotifIcon title="Marbel" icon={<GiMarbles />} slug={"Marble"} />
        <MotifIcon title="Batu" icon={<GiStonePile />} slug={"Stone (Batu)"} />
        <MotifIcon title="Kayu" icon={<GiWoodPile />} slug={"Wood (Kayu)"} />
        <MotifIcon
          title="Rustic"
          icon={<SiWeightsandbiases />}
          slug={"Rustic"}
        />
        <MotifIcon title="Abstrak" icon={<MdDraw />} slug={"Fancy"} />
        <MotifIcon
          title="Dasar"
          icon={<IoIosColorPalette />}
          slug={"Basic (Polos)"}
        />
      </div>
    </div>
  );
};

export default MotifList;

const MotifIcon = ({
  icon,
  title,
  slug,
}: {
  icon: any;
  title: string;
  slug: string;
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/barang/filter?motif=${slug}`)}
      className="rounded-md bg-white dark:bg-slate-800 p-3 flex justify-center border border-slate-500 cursor-pointer"
    >
      <div className="flex items-center space-x-2">
        <span className="text-slate-600 dark:text-slate-300 text-lg md:text-xl">
          {icon}
        </span>
        <p className="text-nowrap font-medium text-base">{title}</p>
      </div>
    </div>
  );
};
