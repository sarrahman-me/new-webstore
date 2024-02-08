import { IoIosColorPalette } from "react-icons/io";
import { GiStonePile, GiWoodPile, GiMarbles } from "react-icons/gi";
import { SiWeightsandbiases } from "react-icons/si";
import { MdDraw } from "react-icons/md";

const MotifList = () => {
  return (
    <div className="space-y-2">
      <p className="font-semibold underline">Motif Populer</p>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
        <MotifIcon icon={<GiMarbles />} title={"Marble"} />
        <MotifIcon icon={<GiStonePile />} title={"Batu"} />
        <MotifIcon icon={<GiWoodPile />} title={"Kayu"} />
        <MotifIcon icon={<SiWeightsandbiases />} title={"Rustic"} />
        <MotifIcon icon={<MdDraw />} title={"Abstrak"} />
        <MotifIcon icon={<IoIosColorPalette />} title={"Dasar"} />
      </div>
    </div>
  );
};

export default MotifList;

const MotifIcon = ({ icon, title }: { icon: any; title: string }) => {
  return (
    <div className="rounded-md bg-white p-3 flex justify-center border">
      <div className="flex items-center space-x-2">
        <span className="text-slate-500 text-lg md:text-xl">{icon}</span>
        <p className="text-nowrap font-medium text-base">{title}</p>
      </div>
    </div>
  );
};
