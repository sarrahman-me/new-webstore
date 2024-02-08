/* eslint-disable @next/next/no-img-element */

const AreaList = () => {
  return (
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
  );
};

const AreaImage = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return (
    <img
      className="h-32 w-56 md:h-36 md:w-60 rounded-md"
      src={imageUrl}
      alt={title}
    />
  );
};

export default AreaList;
