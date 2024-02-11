/* eslint-disable @next/next/no-img-element */

export default function KeramikPattern({ imageUrl }: { imageUrl: string }) {
  const gridStyles = {
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2px",
    backgroundColor: "#ababab",
  };

  return (
    <div className="border bg-white dark:bg-slate-800 rounded-md dark:border-slate-500 p-2 md:p-4">
      <p className="font-semibold underline">Simulasi Pola</p>
      <div className="w-full grid m-1 relative object-cover" style={gridStyles}>
        <ImagePattern imageUrl={imageUrl} />
        <ImagePattern imageUrl={imageUrl} />
        <ImagePattern imageUrl={imageUrl} />
        <ImagePattern imageUrl={imageUrl} />
        <ImagePattern imageUrl={imageUrl} />
        <ImagePattern imageUrl={imageUrl} />
        <ImagePattern imageUrl={imageUrl} />
        <ImagePattern imageUrl={imageUrl} />
        <ImagePattern imageUrl={imageUrl} />
        <ImagePattern imageUrl={imageUrl} />
        <ImagePattern imageUrl={imageUrl} />
        <ImagePattern imageUrl={imageUrl} />
      </div>
    </div>
  );
}

const ImagePattern = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <img
      src={
        imageUrl ||
        "https://ik.imagekit.io/sarrahmanme/No-Image-Placeholder.svg.png?updatedAt=1701908821050"
      }
      onClick={(e) => {
        const img = e.target as HTMLImageElement;
        const deg = img.style.transform
          ? parseInt(
              img.style.transform.replace("rotate(", "").replace("deg)", "")
            )
          : 0;
        img.style.transform = `rotate(${deg + 90}deg)`;
      }}
      alt="produk"
      width={300}
      height={300}
    />
  );
};
