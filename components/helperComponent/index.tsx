/* eslint-disable @next/next/no-img-element */
const HelperComponent = ({
  imageUrl,
  title,
}: {
  title: string;
  imageUrl: string;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <p className="md:text-xl text-center font-bold">{title}</p>
        <img src={imageUrl} alt="notfound" />
      </div>
    </div>
  );
};

export default HelperComponent;
