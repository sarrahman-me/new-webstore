/* eslint-disable @next/next/no-img-element */
import { AiOutlineLike, AiOutlineSearch } from "react-icons/ai";
import { IoLogoGoogle, IoIosColorPalette } from "react-icons/io";
import { GiStoneWall, GiWoodPile, GiMarbles } from "react-icons/gi";
import { SiWeightsandbiases } from "react-icons/si";
import { MdDraw } from "react-icons/md";

export default function Home() {
  return (
    <main className="space-y-6 md:space-y-10 bg-gradient-to-t from-slate-50 via-slate-100 to-slate-200 text-black p-2 md:p-4">
      {/* app bar */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1 md:space-x-2">
          <IoLogoGoogle className="text-lg md:text-2xl" />
          <p className="font-bold md:text-lg">Tester Webstore Mitra</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative hidden md:flex">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              placeholder="Cari Sesuatu ..."
              className="pl-10 p-1 rounded-md border-2 focus:ring-slate-200 focus:border-slate-200 outline-none sm:min-w-96"
            />
          </div>
          <div className="border rounded-md bg-slate-50 flex items-center p-1 space-x-1">
            <AiOutlineLike className="text-xl md:text-2xl" />
            <span>0</span>
          </div>
        </div>
      </div>

      {/* search bar */}
      <div className="md:hidden">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            placeholder="Cari Sesuatu ..."
            className="pl-10 p-1.5 rounded-md border-2 focus:ring-slate-200 focus:border-slate-200 outline-none w-full"
          />
        </div>
      </div>

      {/* motif list */}
      <div className="space-y-2">
        <p className="font-semibold underline">Area Populer</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          <AreaImage
            imageUrl={
              "https://tokokeramik-assets.s3.ap-southeast-1.amazonaws.com/dalamrumah.webp"
            }
            title={"dalam rumah"}
          />
          <AreaImage
            imageUrl={
              "https://tokokeramik-assets.s3.ap-southeast-1.amazonaws.com/photo-1602028915047-37269d1a73f7.avif"
            }
            title={""}
          />
          <AreaImage
            imageUrl={
              "https://tokokeramik-assets.s3.ap-southeast-1.amazonaws.com/no-19-castelcrag-christopher-jordan-architecture-and-design-img~195115210cf0b90f_8-8846-1-78832b5.jpg"
            }
            title={""}
          />
          <AreaImage
            imageUrl={
              "https://tokokeramik-assets.s3.ap-southeast-1.amazonaws.com/modern-bathroom-designs-for-your-home.jpg"
            }
            title={""}
          />
          <AreaImage
            imageUrl={
              "https://tokokeramik-assets.s3.ap-southeast-1.amazonaws.com/Kunal%2520Maniar%2520garden-1.webp"
            }
            title={""}
          />
          <AreaImage
            imageUrl={
              "https://tokokeramik-assets.s3.ap-southeast-1.amazonaws.com/XL-Trainer-Pool-Installation-in-Westerham-Kent-Featured-Image-1-1440x960.jpg"
            }
            title={""}
          />
        </div>
      </div>

      {/* populer area list */}
      <div className="space-y-2">
        <p className="font-semibold underline">Motif Populer</p>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
          <MotifIcon icon={<GiMarbles />} title={"Marble"} />
          <MotifIcon icon={<GiStoneWall />} title={"Batu"} />
          <MotifIcon icon={<GiWoodPile />} title={"Kayu"} />
          <MotifIcon icon={<SiWeightsandbiases />} title={"Rustic"} />
          <MotifIcon icon={<MdDraw />} title={"Abstrak"} />
          <MotifIcon icon={<IoIosColorPalette />} title={"Dasar"} />
        </div>
      </div>
    </main>
  );
}

const AreaImage = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return <img className="h-32 w-56 md:h-36 md:w-60 rounded-md" src={imageUrl} alt={title} />;
};

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
